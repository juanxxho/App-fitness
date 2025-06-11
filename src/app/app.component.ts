import { Component, type OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterModule } from '@angular/router';
import { UserService } from './services/user.service';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterModule],
  template: `
    <nav class="navbar navbar-expand-lg navbar-light fixed-top">
      <div class="container">
        <a class="navbar-brand" routerLink="/">
          <i class="fas fa-dumbbell me-2"></i>FitnessPro
        </a>

        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav me-auto">
            <li class="nav-item">
              <a
                class="nav-link"
                routerLink="/"
                routerLinkActive="active"
                [routerLinkActiveOptions]="{ exact: true }"
                >Inicio</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                routerLink="/ofertas"
                routerLinkActive="active"
                >Ofertas</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                routerLink="/entrenadores"
                routerLinkActive="active"
                >Entrenadores</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                routerLink="/calculadora"
                routerLinkActive="active"
                >Calculadoras</a
              >
            </li>
            <li class="nav-item" *ngIf="userService.isAdmin()">
              <a class="nav-link" routerLink="/admin" routerLinkActive="active">
                <i class="fas fa-cog me-1"></i>Admin
              </a>
            </li>
          </ul>

          <div class="navbar-nav">
            <button
              class="btn btn-outline-secondary me-2"
              (click)="toggleTheme()"
              title="Cambiar tema"
            >
              <i
                class="fas"
                [class.fa-moon]="!isDarkTheme"
                [class.fa-sun]="isDarkTheme"
              ></i>
            </button>

            <div class="nav-item dropdown" *ngIf="userService.currentUser">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
              >
                <i class="fas fa-user me-1"></i
                >{{ userService.currentUser.nombre }}
                <span *ngIf="userService.isAdmin()" class="badge bg-danger ms-1"
                  >Admin</span
                >
              </a>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" routerLink="/perfil">
                    <i class="fas fa-user-edit me-2"></i>Mi Perfil
                  </a>
                </li>
                <li><hr class="dropdown-divider" /></li>
                <li>
                  <a class="dropdown-item" (click)="logout()">
                    <i class="fas fa-sign-out-alt me-2"></i>Cerrar Sesión
                  </a>
                </li>
              </ul>
            </div>

            <div *ngIf="!userService.currentUser" class="d-flex gap-2">
              <button
                class="btn btn-outline-primary"
                (click)="createTestAdmin()"
              >
                <i class="fas fa-user-shield me-1"></i>Admin Demo
              </button>
              <button class="btn btn-primary" routerLink="/perfil">
                <i class="fas fa-user-plus me-1"></i>Crear Perfil
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>

    <main style="margin-top: 76px;">
      <router-outlet></router-outlet>
    </main>

    <!-- Welcome Modal for First Time Users -->
    <div
      class="modal fade"
      id="welcomeModal"
      tabindex="-1"
      *ngIf="showWelcomeModal"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">¡Bienvenido a FitnessPro!</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
            ></button>
          </div>
          <div class="modal-body">
            <p>
              ¡Es tu primera vez aquí! Te recomendamos completar tu perfil para
              personalizar tu experiencia.
            </p>
            <p>
              Podrás acceder a rutinas personalizadas, calculadoras de fitness y
              mucho más.
            </p>
            <div class="alert alert-info">
              <strong>💡 Tip:</strong> Para acceder como administrador, usa el
              botón "Admin Demo" o crea un perfil con:
              <ul class="mb-0 mt-2">
                <li>Nombre: "Admin" o "Administrador"</li>
                <li>Email: "admin&#64;fitnesspro.com"</li>
              </ul>
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Más tarde
            </button>
            <button
              type="button"
              class="btn btn-primary"
              routerLink="/perfil"
              data-bs-dismiss="modal"
            >
              Crear mi perfil
            </button>
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  showWelcomeModal = false;
  isDarkTheme = false;

  constructor(
    public userService: UserService,
    private themeService: ThemeService
  ) {}

  ngOnInit() {
    this.userService.loadUserData();
    this.isDarkTheme = this.themeService.isDarkTheme();

    // Show welcome modal for first time users
    if (!this.userService.hasVisited()) {
      setTimeout(() => {
        this.showWelcomeModal = true;
        const modal = new (window as any).bootstrap.Modal(
          document.getElementById('welcomeModal')
        );
        modal.show();
      }, 1000);
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    // Handle responsive behavior
    console.log('Window resized:', event.target.innerWidth);
  }

  toggleTheme() {
    this.themeService.toggleTheme();
    this.isDarkTheme = this.themeService.isDarkTheme();
  }

  logout() {
    this.userService.logout();
  }

  createTestAdmin() {
    const admin = this.userService.createTestAdmin();
    alert(
      `¡Usuario admin creado!\nNombre: ${admin.nombre}\nEmail: ${admin.email}`
    );
  }
}
