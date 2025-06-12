import {
  Component,
  type OnInit,
  type AfterViewInit,
  ViewChild,
  type ElementRef,
  Inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UserService } from '../../services/user.service';
import { DOCUMENT } from '@angular/common';

declare var google: any;

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <!-- Hero Section with Carousel -->
    <section class="hero-section p-0">
      <div
        id="heroCarousel"
        class="carousel slide carousel-fade"
        data-bs-ride="carousel"
        data-bs-interval="6000"
      >
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
          <!-- Slide 1 - Gimnasio Moderno -->
          <div class="carousel-item active">
            <div class="carousel-image-container">
              <img
                src="https://i.pinimg.com/736x/17/74/fb/1774fb213b15b57d1f344b247a4fcae7.jpg"
                alt="Gimnasio moderno de lujo"
                class="carousel-image"
              />
              <div class="carousel-overlay overlay-luxury"></div>
            </div>
            <div class="carousel-caption-custom">
              <div class="container">
                <div
                  class="row justify-content-center justify-content-lg-start"
                >
                  <div class="col-lg-6 col-xl-5">
                    <div class="hero-badge slide-in-left mb-3">
                      <i class="fas fa-star me-2"></i>Gimnasio Premium
                    </div>
                    <h1
                      class="display-3 fw-bold mb-4 text-white slide-in-left"
                      style="animation-delay: 0.2s;"
                    >
                      Transforma tu vida con FitnessPro
                    </h1>
                    <p
                      class="lead mb-4 text-white-90 slide-in-left"
                      style="animation-delay: 0.4s;"
                    >
                      Instalaciones de lujo con equipos de última generación y
                      tecnología avanzada para tu entrenamiento.
                    </p>
                    <div
                      class="d-flex gap-3 mobile-stack slide-in-left"
                      style="animation-delay: 0.6s;"
                    >
                      <button
                        class="btn btn-primary btn-lg mobile-full-width shadow-lg pulse-btn"
                        routerLink="/ofertas"
                      >
                        <i class="fas fa-tags me-2"></i>Ver Ofertas
                      </button>
                      <button
                        class="btn btn-outline-light btn-lg mobile-full-width"
                        routerLink="/perfil"
                      >
                        <i class="fas fa-user-plus me-2"></i>Comenzar Ahora
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Slide 2 - Entrenamiento Activo -->
          <div class="carousel-item">
            <div class="carousel-image-container">
              <img
                src="https://i.pinimg.com/736x/31/39/85/313985b894f9857a1ae8e9fe312e7adc.jpg"
                alt="Personas entrenando activamente"
                class="carousel-image"
              />
              <div class="carousel-overlay overlay-energy"></div>
            </div>
            <div class="carousel-caption-custom">
              <div class="container">
                <div class="row justify-content-center justify-content-lg-end">
                  <div class="col-lg-6 col-xl-5">
                    <div class="hero-badge slide-in-right mb-3">
                      <i class="fas fa-users me-2"></i>Comunidad Activa
                    </div>
                    <h1
                      class="display-3 fw-bold mb-4 text-white slide-in-right"
                      style="animation-delay: 0.2s;"
                    >
                      Únete a Nuestra Comunidad
                    </h1>
                    <p
                      class="lead mb-4 text-white-90 slide-in-right"
                      style="animation-delay: 0.4s;"
                    >
                      Entrena junto a personas motivadas que comparten tus
                      mismos objetivos de salud y bienestar.
                    </p>
                    <div class="slide-in-right" style="animation-delay: 0.6s;">
                      <button
                        class="btn btn-primary btn-lg mobile-full-width shadow-lg pulse-btn"
                        routerLink="/entrenadores"
                      >
                        <i class="fas fa-users me-2"></i>Conocer Comunidad
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Slide 3 - Entrenamiento Personalizado -->
          <div class="carousel-item">
            <div class="carousel-image-container">
              <img
                src="https://i.pinimg.com/736x/2e/23/de/2e23de703820f8352f183d04aea05126.jpg"
                alt="Entrenamiento personalizado"
                class="carousel-image"
              />
              <div class="carousel-overlay overlay-personal"></div>
            </div>
            <div class="carousel-caption-custom">
              <div class="container">
                <div class="row justify-content-center">
                  <div class="col-lg-8 text-center">
                    <div class="hero-badge slide-in-up mb-3">
                      <i class="fas fa-dumbbell me-2"></i>Entrenamiento
                      Personalizado
                    </div>
                    <h1
                      class="display-3 fw-bold mb-4 text-white slide-in-up"
                      style="animation-delay: 0.2s;"
                    >
                      Tu Entrenador Personal Te Espera
                    </h1>
                    <p
                      class="lead mb-4 text-white-90 slide-in-up"
                      style="animation-delay: 0.4s;"
                    >
                      Rutinas diseñadas específicamente para ti con seguimiento
                      profesional y resultados garantizados.
                    </p>
                    <div
                      class="d-flex gap-3 justify-content-center mobile-stack slide-in-up"
                      style="animation-delay: 0.6s;"
                    >
                      <button
                        class="btn btn-primary btn-lg mobile-full-width shadow-lg pulse-btn"
                        routerLink="/calculadora"
                      >
                        <i class="fas fa-calculator me-2"></i>Calcular Mi Plan
                      </button>
                      <button
                        class="btn btn-outline-light btn-lg mobile-full-width"
                        routerLink="/entrenadores"
                      >
                        <i class="fas fa-user-tie me-2"></i>Ver Entrenadores
                      </button>
                    </div>
                  </div>
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
          <div class="carousel-control-icon-container">
            <i class="fas fa-chevron-left"></i>
          </div>
          <span class="visually-hidden">Anterior</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#heroCarousel"
          data-bs-slide="next"
        >
          <div class="carousel-control-icon-container">
            <i class="fas fa-chevron-right"></i>
          </div>
          <span class="visually-hidden">Siguiente</span>
        </button>
      </div>
    </section>

    <!-- User Status Section -->
    <section class="py-5" *ngIf="userService.currentUser">
      <div class="container">
        <div class="row">
          <div class="col-12 text-center">
            <div class="alert alert-success rounded-pill">
              <h4 class="mb-2">
                ¡Bienvenido de vuelta, {{ userService.currentUser.nombre }}!
              </h4>
              <div class="row text-center">
                <div class="col-6 col-md-6">
                  <div class="stat-number">{{ getDaysActive() }}</div>
                  <small>días activo</small>
                </div>
                <div class="col-6 col-md-6">
                  <div class="stat-number">
                    {{ userService.currentUser.sesiones || 0 }}
                  </div>
                  <small>sesiones</small>
                </div>
              </div>
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
            <div class="card h-100 text-center service-card">
              <div class="card-body">
                <div class="service-icon">
                  <i class="fas fa-dumbbell"></i>
                </div>
                <h5 class="card-title">Entrenamiento Personalizado</h5>
                <p class="card-text">
                  Rutinas diseñadas específicamente para tus objetivos y nivel
                  de condición física.
                </p>
                <button
                  class="btn btn-outline-primary mobile-full-width"
                  routerLink="/entrenadores"
                >
                  <i class="fas fa-arrow-right me-1"></i>Ver más
                </button>
              </div>
            </div>
          </div>

          <div class="col-md-4">
            <div class="card h-100 text-center service-card">
              <div class="card-body">
                <div class="service-icon">
                  <i class="fas fa-calculator"></i>
                </div>
                <h5 class="card-title">Calculadoras Fitness</h5>
                <p class="card-text">
                  Herramientas para calcular tu IMC, TMB y planificar tu
                  progreso de manera científica.
                </p>
                <button
                  class="btn btn-primary mobile-full-width"
                  routerLink="/calculadora"
                >
                  <i class="fas fa-calculator me-1"></i>Probar Ahora
                </button>
              </div>
            </div>
          </div>

          <div class="col-md-4">
            <div class="card h-100 text-center service-card">
              <div class="card-body">
                <div class="service-icon">
                  <i class="fas fa-users"></i>
                </div>
                <h5 class="card-title">Comunidad Activa</h5>
                <p class="card-text">
                  Únete a nuestra comunidad de fitness y comparte tu progreso
                  con otros miembros.
                </p>
                <button
                  class="btn btn-outline-primary mobile-full-width"
                  routerLink="/perfil"
                >
                  <i class="fas fa-user-plus me-1"></i>Unirse
                </button>
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
          <div class="col-lg-6 mb-4 mb-lg-0">
            <div class="row g-3">
              <div class="col-12">
                <div class="card location-card">
                  <div class="card-body">
                    <h5 class="card-title">
                      <i class="fas fa-map-marker-alt text-primary me-2"></i>
                      Sede Norte
                    </h5>
                    <p class="card-text">
                      Calle 123 #45-67, Zona Norte<br />
                      <strong>Teléfono:</strong>
                      <a href="tel:+5716011234567" class="text-decoration-none"
                        >(601) 123-4567</a
                      ><br />
                      <strong>Horarios:</strong> Lun-Vie 5:00-22:00, Sáb-Dom
                      6:00-20:00
                    </p>
                    <button
                      class="btn btn-outline-primary btn-sm mobile-full-width"
                      (click)="navigateToLocation(4.711, -74.0721)"
                    >
                      <i class="fas fa-directions me-1"></i>Cómo llegar
                    </button>
                  </div>
                </div>
              </div>

              <div class="col-12">
                <div class="card location-card">
                  <div class="card-body">
                    <h5 class="card-title">
                      <i class="fas fa-map-marker-alt text-primary me-2"></i>
                      Sede Centro
                    </h5>
                    <p class="card-text">
                      Carrera 89 #12-34, Centro<br />
                      <strong>Teléfono:</strong>
                      <a href="tel:+5716012345678" class="text-decoration-none"
                        >(601) 234-5678</a
                      ><br />
                      <strong>Horarios:</strong> Lun-Vie 5:00-22:00, Sáb-Dom
                      6:00-20:00
                    </p>
                    <button
                      class="btn btn-outline-primary btn-sm mobile-full-width"
                      (click)="navigateToLocation(4.5981, -74.0758)"
                    >
                      <i class="fas fa-directions me-1"></i>Cómo llegar
                    </button>
                  </div>
                </div>
              </div>

              <div class="col-12">
                <div class="card location-card">
                  <div class="card-body">
                    <h5 class="card-title">
                      <i class="fas fa-map-marker-alt text-primary me-2"></i>
                      Sede Sur
                    </h5>
                    <p class="card-text">
                      Avenida 56 #78-90, Zona Sur<br />
                      <strong>Teléfono:</strong>
                      <a href="tel:+5716013456789" class="text-decoration-none"
                        >(601) 345-6789</a
                      ><br />
                      <strong>Horarios:</strong> Lun-Vie 5:00-22:00, Sáb-Dom
                      6:00-20:00
                    </p>
                    <button
                      class="btn btn-outline-primary btn-sm mobile-full-width"
                      (click)="navigateToLocation(4.5709, -74.2973)"
                    >
                      <i class="fas fa-directions me-1"></i>Cómo llegar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-6">
            <div class="card map-card">
              <div class="card-header bg-primary text-white">
                <h6 class="mb-0">
                  <i class="fas fa-map-marked-alt me-2"></i>
                  Ubicaciones FitnessPro
                </h6>
              </div>
              <div class="card-body p-0">
                <div #mapContainer id="map" class="map-container-real">
                  <!-- Fallback mientras carga el mapa -->
                  <div class="text-center p-4 map-loading" id="mapLoading">
                    <div class="spinner-border text-primary mb-3" role="status">
                      <span class="visually-hidden">Cargando mapa...</span>
                    </div>
                    <h5 class="text-muted">Cargando mapa interactivo...</h5>
                    <p class="text-muted mb-3">
                      Mostrando ubicaciones de nuestras sedes
                    </p>
                  </div>
                </div>
              </div>
              <div class="card-footer bg-light">
                <div class="d-flex justify-content-between align-items-center">
                  <small class="text-muted">
                    <i class="fas fa-info-circle me-1"></i>
                    Haz clic en los marcadores para más información
                  </small>
                  <button
                    class="btn btn-outline-primary btn-sm"
                    (click)="openGoogleMaps()"
                  >
                    <i class="fas fa-external-link-alt me-1"></i>Ver en Google
                    Maps
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-5 cta-section">
      <div class="container text-center">
        <h2 class="display-5 fw-bold mb-4 text-white">¿Listo para comenzar?</h2>
        <p class="lead mb-4 text-white-90">
          Únete a miles de personas que ya transformaron su vida con nosotros
        </p>
        <div class="d-flex justify-content-center gap-3 mobile-stack">
          <button
            class="btn btn-light btn-lg mobile-full-width shadow-lg"
            routerLink="/ofertas"
          >
            <i class="fas fa-tags me-2"></i>Ver Planes
          </button>
          <button
            class="btn btn-outline-light btn-lg mobile-full-width"
            routerLink="/perfil"
          >
            <i class="fas fa-user-plus me-2"></i>Crear Perfil
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
              <a
                href="#"
                class="text-light social-link"
                onclick="alert('Síguenos en Facebook')"
              >
                <i class="fab fa-facebook fa-lg"></i>
              </a>
              <a
                href="#"
                class="text-light social-link"
                onclick="alert('Síguenos en Instagram')"
              >
                <i class="fab fa-instagram fa-lg"></i>
              </a>
              <a
                href="#"
                class="text-light social-link"
                onclick="alert('Síguenos en Twitter')"
              >
                <i class="fab fa-twitter fa-lg"></i>
              </a>
              <a
                href="#"
                class="text-light social-link"
                onclick="alert('Suscríbete a nuestro canal')"
              >
                <i class="fab fa-youtube fa-lg"></i>
              </a>
            </div>
          </div>

          <div class="col-lg-2 col-md-6 mb-4">
            <h6 class="text-white mb-3">Servicios</h6>
            <ul class="list-unstyled">
              <li>
                <a
                  href="#"
                  class="text-light text-decoration-none footer-link"
                  onclick="alert('Información sobre entrenamiento personal')"
                  >Entrenamiento Personal</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="text-light text-decoration-none footer-link"
                  onclick="alert('Información sobre clases grupales')"
                  >Clases Grupales</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="text-light text-decoration-none footer-link"
                  onclick="alert('Información sobre nutrición')"
                  >Nutrición</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="text-light text-decoration-none footer-link"
                  onclick="alert('Información sobre fisioterapia')"
                  >Fisioterapia</a
                >
              </li>
            </ul>
          </div>

          <div class="col-lg-2 col-md-6 mb-4">
            <h6 class="text-white mb-3">Enlaces</h6>
            <ul class="list-unstyled">
              <li>
                <a
                  routerLink="/ofertas"
                  class="text-light text-decoration-none footer-link"
                  >Ofertas</a
                >
              </li>
              <li>
                <a
                  routerLink="/entrenadores"
                  class="text-light text-decoration-none footer-link"
                  >Entrenadores</a
                >
              </li>
              <li>
                <a
                  routerLink="/calculadora"
                  class="text-light text-decoration-none footer-link"
                  >Calculadoras</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="text-light text-decoration-none footer-link"
                  onclick="alert('Blog próximamente')"
                  >Blog</a
                >
              </li>
            </ul>
          </div>

          <div class="col-lg-4 mb-4">
            <h6 class="text-white mb-3">Contacto y PQR</h6>
            <div class="mb-2">
              <i class="fas fa-phone me-2"></i>
              <a
                href="tel:+5716011234567"
                class="text-light text-decoration-none"
                >(601) 123-4567</a
              >
            </div>
            <div class="mb-2">
              <i class="fas fa-envelope me-2"></i>
              <a
                href="mailto:info@fitnesspro.com"
                class="text-light text-decoration-none"
                >info&#64;fitnesspro.com</a
              >
            </div>
            <div class="mb-3">
              <i class="fas fa-map-marker-alt me-2"></i>
              <span class="text-light">Bogotá, Colombia</span>
            </div>

            <div class="card bg-dark border-secondary pqr-card">
              <div class="card-body">
                <h6 class="card-title text-white">
                  PQR - Peticiones, Quejas y Reclamos
                </h6>
                <p class="card-text text-light small">
                  Para peticiones, quejas o reclamos, contáctanos:
                </p>
                <div class="d-flex gap-2 mobile-stack">
                  <button
                    class="btn btn-outline-light btn-sm mobile-full-width"
                    onclick="window.location.href='mailto:pqr@fitnesspro.com'"
                  >
                    <i class="fas fa-envelope me-1"></i>Email
                  </button>
                  <button
                    class="btn btn-outline-light btn-sm mobile-full-width"
                    onclick="window.location.href='tel:+5716011234567'"
                  >
                    <i class="fas fa-phone me-1"></i>Llamar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr class="my-4 bg-light" />

        <div class="row align-items-center">
          <div class="col-md-6 text-center text-md-start">
            <p class="text-light mb-0">
              &copy; 2024 FitnessPro. Todos los derechos reservados.
            </p>
          </div>
          <div class="col-md-6 text-center text-md-end mt-2 mt-md-0">
            <a
              href="#"
              class="text-light text-decoration-none footer-link me-3"
              onclick="alert('Términos y condiciones próximamente')"
              >Términos y Condiciones</a
            >
            <a
              href="#"
              class="text-light text-decoration-none footer-link"
              onclick="alert('Política de privacidad próximamente')"
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
  @ViewChild('mapContainer', { static: false }) mapContainer!: ElementRef;
  private map: any;
  private locations = [
    {
      name: 'Sede Norte',
      lat: 4.711,
      lng: -74.0721,
      address: 'Calle 123 #45-67, Zona Norte',
      phone: '(601) 123-4567',
      hours: 'Lun-Vie 5:00-22:00, Sáb-Dom 6:00-20:00',
    },
    {
      name: 'Sede Centro',
      lat: 4.5981,
      lng: -74.0758,
      address: 'Carrera 89 #12-34, Centro',
      phone: '(601) 234-5678',
      hours: 'Lun-Vie 5:00-22:00, Sáb-Dom 6:00-20:00',
    },
    {
      name: 'Sede Sur',
      lat: 4.5709,
      lng: -74.2973,
      address: 'Avenida 56 #78-90, Zona Sur',
      phone: '(601) 345-6789',
      hours: 'Lun-Vie 5:00-22:00, Sáb-Dom 6:00-20:00',
    },
  ];

  constructor(
    public userService: UserService,
    @Inject(DOCUMENT) private document: Document
  ) {}

  ngOnInit(): void {
    // Component initialization
  }

  ngAfterViewInit() {
    this.loadGoogleMaps();
  }

  getDaysActive(): number {
    return this.userService.getDaysActive();
  }

  private loadGoogleMaps() {
    if (typeof google !== 'undefined') {
      this.initializeMap();
    } else {
      this.loadGoogleMapsScript().then(() => {
        this.initializeMap();
      });
    }
  }

  private loadGoogleMapsScript(): Promise<void> {
    return new Promise((resolve) => {
      const script = this.document.createElement('script');
      script.src =
        'https://maps.googleapis.com/maps/api/js?key=AIzaSyAM0n9YUrDteptFCiQlNTRCW1S-C4YfIvw&libraries=places';
      script.async = true;
      script.defer = true;
      script.onload = () => resolve();
      this.document.head.appendChild(script);
    });
  }

  private initializeMap() {
    if (!this.mapContainer) return;

    const mapOptions = {
      center: { lat: 4.6097, lng: -74.0817 },
      zoom: 11,
      styles: [
        {
          featureType: 'all',
          elementType: 'geometry.fill',
          stylers: [{ weight: '2.00' }],
        },
        {
          featureType: 'landscape',
          elementType: 'all',
          stylers: [{ color: '#f2f2f2' }],
        },
        {
          featureType: 'poi',
          elementType: 'all',
          stylers: [{ visibility: 'off' }],
        },
        {
          featureType: 'road',
          elementType: 'all',
          stylers: [{ saturation: -100 }, { lightness: 45 }],
        },
        {
          featureType: 'water',
          elementType: 'all',
          stylers: [{ color: '#46bcec' }, { visibility: 'on' }],
        },
      ],
    };

    this.map = new google.maps.Map(this.mapContainer.nativeElement, mapOptions);
    this.addMarkers();
  }

  private addMarkers() {
    this.locations.forEach((location) => {
      const marker = new google.maps.Marker({
        position: { lat: location.lat, lng: location.lng },
        map: this.map,
        title: location.name,
        icon: {
          url:
            'data:image/svg+xml;charset=UTF-8,' +
            encodeURIComponent(`
              <svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                <circle cx="20" cy="20" r="18" fill="#dc2626" stroke="#ffffff" stroke-width="3"/>
                <text x="20" y="26" text-anchor="middle" fill="white" font-family="Arial" font-size="16" font-weight="bold">🏋️</text>
              </svg>
            `),
          scaledSize: new google.maps.Size(40, 40),
          anchor: new google.maps.Point(20, 20),
        },
      });

      const infoWindow = new google.maps.InfoWindow({
        content: `
          <div style="padding: 10px; max-width: 250px;">
            <h6 style="color: #dc2626; margin-bottom: 8px; font-weight: bold;">${
              location.name
            }</h6>
            <p style="margin-bottom: 5px; font-size: 14px;"><strong>📍 Dirección:</strong><br>${
              location.address
            }</p>
            <p style="margin-bottom: 5px; font-size: 14px;"><strong>📞 Teléfono:</strong><br><a href="tel:${location.phone.replace(
              /[^\d+]/g,
              ''
            )}" style="color: #dc2626; text-decoration: none;">${
          location.phone
        }</a></p>
            <p style="margin-bottom: 10px; font-size: 14px;"><strong>🕒 Horarios:</strong><br>${
              location.hours
            }</p>
            <div style="text-align: center;">
              <button onclick="window.open('https://www.google.com/maps/dir/?api=1&destination=${
                location.lat
              },${location.lng}', '_blank')" 
                      style="background: #dc2626; color: white; border: none; padding: 8px 16px; border-radius: 5px; cursor: pointer; font-size: 12px;">
                🧭 Cómo llegar
              </button>
            </div>
          </div>
        `,
      });

      marker.addListener('click', () => {
        infoWindow.open(this.map, marker);
      });
    });
  }

  openGoogleMaps() {
    window.open(
      'https://www.google.com/maps/search/gimnasio+fitnesspro+bogota',
      '_blank'
    );
  }

  navigateToLocation(lat: number, lng: number) {
    window.open(
      `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`,
      '_blank'
    );
  }
}
