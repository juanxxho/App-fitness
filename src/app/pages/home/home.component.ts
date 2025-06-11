import { Component, type OnInit, type AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <!-- Hero Section with Carousel -->
    <section class="hero-section">
      <div id="heroCarousel" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#heroCarousel"
            data-bs-slide-to="0"
            class="active"
          ></button>
          <button
            type="button"
            data-bs-target="#heroCarousel"
            data-bs-slide-to="1"
          ></button>
          <button
            type="button"
            data-bs-target="#heroCarousel"
            data-bs-slide-to="2"
          ></button>
        </div>

        <div class="carousel-inner">
          <div class="carousel-item active">
            <div class="container">
              <div class="row align-items-center min-vh-50">
                <div class="col-lg-6">
                  <h1 class="display-4 fw-bold mb-4 fade-in">
                    Transforma tu vida con FitnessPro
                  </h1>
                  <p class="lead mb-4">
                    El mejor centro de entrenamiento con equipos de última
                    generación y entrenadores certificados.
                  </p>
                  <div class="d-flex gap-3">
                    <button
                      class="btn btn-primary btn-lg"
                      routerLink="/ofertas"
                    >
                      Ver Ofertas
                    </button>
                    <button
                      class="btn btn-outline-light btn-lg"
                      routerLink="/perfil"
                    >
                      Comenzar Ahora
                    </button>
                  </div>
                </div>
                <div class="col-lg-6">
                  <img
                    src="https://i.pinimg.com/736x/17/74/fb/1774fb213b15b57d1f344b247a4fcae7.jpg"
                    alt="Gimnasio moderno"
                    class="img-fluid rounded"
                  />
                </div>
              </div>
            </div>
          </div>

          <div class="carousel-item">
            <div class="container">
              <div class="row align-items-center min-vh-50">
                <div class="col-lg-6">
                  <h1 class="display-4 fw-bold mb-4">
                    Entrenadores Certificados
                  </h1>
                  <p class="lead mb-4">
                    Nuestro equipo de profesionales te guiará en cada paso de tu
                    transformación.
                  </p>
                  <button
                    class="btn btn-primary btn-lg"
                    routerLink="/entrenadores"
                  >
                    Conocer Equipo
                  </button>
                </div>
                <div class="col-lg-6">
                  <img
                    src="https://i.pinimg.com/736x/1e/41/7d/1e417d46713dad03d2e8b3e985ba9ea9.jpg"
                    alt="Entrenadores"
                    class="img-fluid rounded"
                  />
                </div>
              </div>
            </div>
          </div>

          <div class="carousel-item">
            <div class="container">
              <div class="row align-items-center min-vh-50">
                <div class="col-lg-6">
                  <h1 class="display-4 fw-bold mb-4">Tecnología Avanzada</h1>
                  <p class="lead mb-4">
                    Calculadoras personalizadas, seguimiento de progreso y
                    rutinas adaptadas a ti.
                  </p>
                  <button
                    class="btn btn-primary btn-lg"
                    routerLink="/calculadora"
                  >
                    Probar Calculadora
                  </button>
                </div>
                <div class="col-lg-6">
                  <img
                    src="https://i.pinimg.com/736x/2e/23/de/2e23de703820f8352f183d04aea05126.jpg"
                    alt="Tecnología fitness"
                    class="img-fluid rounded"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#heroCarousel"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon"></span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#heroCarousel"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon"></span>
        </button>
      </div>
    </section>

    <!-- User Status Section -->
    <section class="py-5 bg-light" *ngIf="userService.currentUser">
      <div class="container">
        <div class="row">
          <div class="col-12 text-center">
            <div class="alert alert-success">
              <h4>
                ¡Bienvenido de vuelta, {{ userService.currentUser.nombre }}!
              </h4>
              <p class="mb-0">
                Llevas {{ getDaysActive() }} días activo |
                {{ userService.currentUser.sesiones || 0 }} sesiones completadas
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section class="py-5">
      <div class="container">
        <div class="row text-center mb-5">
          <div class="col-12">
            <h2 class="display-5 fw-bold">Nuestros Servicios</h2>
            <p class="lead">
              Todo lo que necesitas para alcanzar tus objetivos
            </p>
          </div>
        </div>

        <div class="row g-4">
          <div class="col-md-4">
            <div class="card h-100 text-center">
              <div class="card-body">
                <i class="fas fa-dumbbell fa-3x text-primary mb-3"></i>
                <h5 class="card-title">Entrenamiento Personalizado</h5>
                <p class="card-text">
                  Rutinas diseñadas específicamente para tus objetivos y nivel
                  de condición física.
                </p>
              </div>
            </div>
          </div>

          <div class="col-md-4">
            <div class="card h-100 text-center">
              <div class="card-body">
                <i class="fas fa-calculator fa-3x text-primary mb-3"></i>
                <h5 class="card-title">Calculadoras Fitness</h5>
                <p class="card-text">
                  Herramientas para calcular tu IMC, TMB y planificar tu
                  progreso de manera científica.
                </p>
                <a
                  href="#"
                  class="btn btn-outline-primary"
                  routerLink="/calculadora"
                  >Probar Ahora</a
                >
              </div>
            </div>
          </div>

          <div class="col-md-4">
            <div class="card h-100 text-center">
              <div class="card-body">
                <i class="fas fa-users fa-3x text-primary mb-3"></i>
                <h5 class="card-title">Comunidad Activa</h5>
                <p class="card-text">
                  Únete a nuestra comunidad de fitness y comparte tu progreso
                  con otros miembros.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Location Section with Map -->
    <section class="py-5 bg-light">
      <div class="container">
        <div class="row">
          <div class="col-12 text-center mb-5">
            <h2 class="display-5 fw-bold">Nuestras Sedes</h2>
            <p class="lead">Encuentra la sede más cercana a ti</p>
          </div>
        </div>

        <div class="row">
          <div class="col-lg-6">
            <div class="row g-3">
              <div class="col-12">
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">
                      <i class="fas fa-map-marker-alt text-primary me-2"></i>
                      Sede Norte
                    </h5>
                    <p class="card-text">
                      Calle 123 #45-67, Zona Norte<br />
                      <strong>Teléfono:</strong> (601) 123-4567<br />
                      <strong>Horarios:</strong> Lun-Vie 5:00-22:00, Sáb-Dom
                      6:00-20:00
                    </p>
                  </div>
                </div>
              </div>

              <div class="col-12">
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">
                      <i class="fas fa-map-marker-alt text-primary me-2"></i>
                      Sede Centro
                    </h5>
                    <p class="card-text">
                      Carrera 89 #12-34, Centro<br />
                      <strong>Teléfono:</strong> (601) 234-5678<br />
                      <strong>Horarios:</strong> Lun-Vie 5:00-22:00, Sáb-Dom
                      6:00-20:00
                    </p>
                  </div>
                </div>
              </div>

              <div class="col-12">
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">
                      <i class="fas fa-map-marker-alt text-primary me-2"></i>
                      Sede Sur
                    </h5>
                    <p class="card-text">
                      Avenida 56 #78-90, Zona Sur<br />
                      <strong>Teléfono:</strong> (601) 345-6789<br />
                      <strong>Horarios:</strong> Lun-Vie 5:00-22:00, Sáb-Dom
                      6:00-20:00
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-6">
            <div class="card">
              <div class="card-body p-0">
                <div
                  id="map"
                  style="height: 400px; background: #e9ecef; display: flex; align-items: center; justify-content: center;"
                >
                  <div class="text-center">
                    <i class="fas fa-map fa-3x text-muted mb-3"></i>
                    <p class="text-muted">Mapa interactivo de nuestras sedes</p>
                    <small class="text-muted"
                      >Integración con Google Maps próximamente</small
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-5 bg-primary text-white">
      <div class="container text-center">
        <h2 class="display-5 fw-bold mb-4">¿Listo para comenzar?</h2>
        <p class="lead mb-4">
          Únete a miles de personas que ya transformaron su vida con nosotros
        </p>
        <div class="d-flex justify-content-center gap-3">
          <button class="btn btn-light btn-lg" routerLink="/ofertas">
            Ver Planes
          </button>
          <button class="btn btn-outline-light btn-lg" routerLink="/perfil">
            Crear Perfil
          </button>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="footer py-5">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 mb-4">
            <h5 class="text-white mb-3">
              <i class="fas fa-dumbbell me-2"></i>FitnessPro
            </h5>
            <p class="text-light">
              Tu centro de entrenamiento de confianza. Transformamos vidas a
              través del fitness y el bienestar integral.
            </p>
            <div class="d-flex gap-3">
              <a href="#" class="text-light"
                ><i class="fab fa-facebook fa-lg"></i
              ></a>
              <a href="#" class="text-light"
                ><i class="fab fa-instagram fa-lg"></i
              ></a>
              <a href="#" class="text-light"
                ><i class="fab fa-twitter fa-lg"></i
              ></a>
              <a href="#" class="text-light"
                ><i class="fab fa-youtube fa-lg"></i
              ></a>
            </div>
          </div>

          <div class="col-lg-2 col-md-6 mb-4">
            <h6 class="text-white mb-3">Servicios</h6>
            <ul class="list-unstyled">
              <li>
                <a href="#" class="text-light text-decoration-none"
                  >Entrenamiento Personal</a
                >
              </li>
              <li>
                <a href="#" class="text-light text-decoration-none"
                  >Clases Grupales</a
                >
              </li>
              <li>
                <a href="#" class="text-light text-decoration-none"
                  >Nutrición</a
                >
              </li>
              <li>
                <a href="#" class="text-light text-decoration-none"
                  >Fisioterapia</a
                >
              </li>
            </ul>
          </div>

          <div class="col-lg-2 col-md-6 mb-4">
            <h6 class="text-white mb-3">Enlaces</h6>
            <ul class="list-unstyled">
              <li>
                <a routerLink="/ofertas" class="text-light text-decoration-none"
                  >Ofertas</a
                >
              </li>
              <li>
                <a
                  routerLink="/entrenadores"
                  class="text-light text-decoration-none"
                  >Entrenadores</a
                >
              </li>
              <li>
                <a
                  routerLink="/calculadora"
                  class="text-light text-decoration-none"
                  >Calculadoras</a
                >
              </li>
              <li>
                <a href="#" class="text-light text-decoration-none">Blog</a>
              </li>
            </ul>
          </div>

          <div class="col-lg-4 mb-4">
            <h6 class="text-white mb-3">Contacto y PQR</h6>
            <div class="mb-2">
              <i class="fas fa-phone me-2"></i>
              <span class="text-light">(601) 123-4567</span>
            </div>
            <div class="mb-2">
              <i class="fas fa-envelope me-2"></i>
              <span class="text-light"> info&#64;fitnesspro.com </span>
            </div>
            <div class="mb-3">
              <i class="fas fa-map-marker-alt me-2"></i>
              <span class="text-light">Bogotá, Colombia</span>
            </div>

            <div class="card bg-light border-secondary">
              <div class="card-body">
                <h6 class="card-title text-dark">
                  PQR - Peticiones, Quejas y Reclamos
                </h6>
                <p class="card-text text-dark small">
                  Para peticiones, quejas o reclamos, contáctanos:
                </p>
                <div class="d-flex gap-2">
                  <button class="btn btn-outline-dark btn-sm">
                    <i class="fas fa-envelope me-1"></i>Email
                  </button>
                  <button class="btn btn-outline-dark btn-sm">
                    <i class="fas fa-phone me-1"></i>Llamar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr class="my-4 bg-light" />

        <div class="row align-items-center">
          <div class="col-md-6">
            <p class="text-light mb-0">
              &copy; 2024 FitnessPro. Todos los derechos reservados.
            </p>
          </div>
          <div class="col-md-6 text-md-end">
            <a href="#" class="text-light text-decoration-none me-3"
              >Términos y Condiciones</a
            >
            <a href="#" class="text-light text-decoration-none"
              >Política de Privacidad</a
            >
          </div>
        </div>
      </div>
    </footer>
  `,
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, AfterViewInit {
  constructor(public userService: UserService) {}

  ngOnInit() {
    // Component initialization
  }

  ngAfterViewInit() {
    // Initialize carousel if needed
  }

  getDaysActive(): number {
    return this.userService.getDaysActive();
  }
}
