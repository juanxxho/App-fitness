import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
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
              <span class="text-light">info&#64;fitnesspro.com</span>
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
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {}
