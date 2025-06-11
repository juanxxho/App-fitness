import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from '../../components/footer/footer.component';

interface Plan {
  id: number;
  nombre: string;
  precio: number;
  duracion: string;
  caracteristicas: string[];
  popular: boolean;
}

@Component({
  selector: 'app-ofertas',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, FooterComponent],
  template: `
    <!-- Hero Section -->
    <section class="bg-primary text-white py-5">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6">
            <h1 class="display-4 fw-bold mb-4 slide-in">
              Nuestros Planes y Ofertas
            </h1>
            <p class="lead mb-4">
              Encuentra el plan perfecto para alcanzar tus objetivos fitness.
              Tenemos opciones para todos los niveles y presupuestos.
            </p>
          </div>
          <div class="col-lg-6">
            <img
              src="/placeholder.svg?height=300&width=500"
              alt="Planes de entrenamiento"
              class="img-fluid rounded"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Filter Section -->
    <section class="py-4 bg-light">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <div class="input-group">
              <span class="input-group-text">
                <i class="fas fa-filter"></i>
              </span>
              <select
                class="form-select"
                [(ngModel)]="filtroActual"
                (change)="filtrarPlanes()"
              >
                <option value="todos">Todos los planes</option>
                <option value="mensual">Planes mensuales</option>
                <option value="trimestral">Planes trimestrales</option>
                <option value="anual">Planes anuales</option>
              </select>
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-check form-switch">
              <input
                class="form-check-input"
                type="checkbox"
                id="mostrarPopulares"
                [(ngModel)]="soloPopulares"
                (change)="filtrarPlanes()"
              />
              <label class="form-check-label" for="mostrarPopulares"
                >Mostrar solo planes populares</label
              >
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Plans Section -->
    <section class="py-5">
      <div class="container">
        <div class="row g-4">
          <div *ngFor="let plan of planesFiltrados" class="col-lg-4 col-md-6">
            <div
              class="card h-100 position-relative"
              [class.border-primary]="plan.popular"
            >
              <div
                *ngIf="plan.popular"
                class="position-absolute top-0 end-0 bg-primary text-white px-3 py-1 rounded-bottom-start"
              >
                Popular
              </div>
              <div class="card-body">
                <h3 class="card-title">{{ plan.nombre }}</h3>
                <div class="d-flex align-items-baseline mb-3">
                  <h4 class="display-6 fw-bold mb-0">
                    {{ plan.precio | number : '1.2-2' }}
                  </h4>
                  <span class="text-muted ms-2">/ {{ plan.duracion }}</span>
                </div>
                <hr />
                <ul class="list-unstyled">
                  <li
                    *ngFor="let caracteristica of plan.caracteristicas"
                    class="mb-2"
                  >
                    <i class="fas fa-check text-primary me-2"></i>
                    {{ caracteristica }}
                  </li>
                </ul>
              </div>
              <div class="card-footer bg-transparent border-0 text-center">
                <button class="btn btn-primary w-100">Seleccionar Plan</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Promotion Section -->
    <section class="py-5 bg-light">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6 mb-4 mb-lg-0">
            <img
              src="/placeholder.svg?height=400&width=500"
              alt="Promoción especial"
              class="img-fluid rounded"
            />
          </div>
          <div class="col-lg-6">
            <div class="card border-0 bg-white shadow">
              <div class="card-body p-4">
                <h2 class="card-title fw-bold mb-3">Oferta Especial</h2>
                <p class="card-text mb-4">
                  ¡Inscríbete hoy y obtén un 20% de descuento en cualquier plan!
                  Además, recibirás una sesión gratuita con uno de nuestros
                  entrenadores personales.
                </p>
                <div class="d-flex align-items-center mb-4">
                  <div class="display-4 fw-bold text-primary me-3">20%</div>
                  <div>
                    <h5 class="mb-0">Descuento</h5>
                    <p class="text-muted mb-0">en todos los planes</p>
                  </div>
                </div>
                <div class="d-flex justify-content-between">
                  <button class="btn btn-primary">Aprovechar Oferta</button>
                  <div class="text-muted">
                    <i class="fas fa-clock me-1"></i> Válido hasta: 30/06/2024
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="py-5">
      <div class="container">
        <div class="row mb-5">
          <div class="col-12 text-center">
            <h2 class="display-5 fw-bold">Preguntas Frecuentes</h2>
            <p class="lead">
              Todo lo que necesitas saber sobre nuestros planes
            </p>
          </div>
        </div>

        <div class="row">
          <div class="col-lg-8 mx-auto">
            <div class="accordion" id="faqAccordion">
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button
                    class="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#faq1"
                  >
                    ¿Puedo cambiar de plan en cualquier momento?
                  </button>
                </h2>
                <div
                  id="faq1"
                  class="accordion-collapse collapse show"
                  data-bs-parent="#faqAccordion"
                >
                  <div class="accordion-body">
                    Sí, puedes cambiar de plan en cualquier momento. Si cambias
                    a un plan de mayor valor, se te cobrará la diferencia
                    prorrateada. Si cambias a un plan de menor valor, el cambio
                    se aplicará en tu próximo ciclo de facturación.
                  </div>
                </div>
              </div>

              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#faq2"
                  >
                    ¿Hay algún costo de inscripción?
                  </button>
                </h2>
                <div
                  id="faq2"
                  class="accordion-collapse collapse"
                  data-bs-parent="#faqAccordion"
                >
                  <div class="accordion-body">
                    No, no cobramos ninguna tarifa de inscripción. Solo pagas el
                    precio del plan que elijas.
                  </div>
                </div>
              </div>

              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#faq3"
                  >
                    ¿Puedo congelar mi membresía?
                  </button>
                </h2>
                <div
                  id="faq3"
                  class="accordion-collapse collapse"
                  data-bs-parent="#faqAccordion"
                >
                  <div class="accordion-body">
                    Sí, puedes congelar tu membresía hasta por 30 días al año
                    sin costo adicional. Para períodos más largos, se aplica una
                    pequeña tarifa de mantenimiento.
                  </div>
                </div>
              </div>

              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#faq4"
                  >
                    ¿Qué métodos de pago aceptan?
                  </button>
                </h2>
                <div
                  id="faq4"
                  class="accordion-collapse collapse"
                  data-bs-parent="#faqAccordion"
                >
                  <div class="accordion-body">
                    Aceptamos tarjetas de crédito/débito (Visa, Mastercard,
                    American Express), transferencias bancarias y efectivo en
                    nuestras sedes.
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
          Elige el plan que mejor se adapte a tus necesidades y comienza tu
          transformación hoy mismo
        </p>
        <button class="btn btn-light btn-lg">Ver Todos los Planes</button>
      </div>
    </section>

    <!-- Footer -->
    <app-footer></app-footer>
  `,
  styleUrls: ['./ofertas.component.scss'],
})
export class OfertasComponent {
  planes: Plan[] = [
    {
      id: 1,
      nombre: 'Plan Básico',
      precio: 29.99,
      duracion: 'mes',
      caracteristicas: [
        'Acceso a área de pesas',
        'Acceso a cardio',
        'Horario limitado (6am-10pm)',
        'App de seguimiento básica',
      ],
      popular: false,
    },
    {
      id: 2,
      nombre: 'Plan Premium',
      precio: 49.99,
      duracion: 'mes',
      caracteristicas: [
        'Acceso completo 24/7',
        'Clases grupales incluidas',
        '1 sesión con entrenador',
        'App de seguimiento completa',
        'Acceso a todas las sedes',
      ],
      popular: true,
    },
    {
      id: 3,
      nombre: 'Plan Elite',
      precio: 79.99,
      duracion: 'mes',
      caracteristicas: [
        'Todo lo del plan Premium',
        '4 sesiones con entrenador',
        'Plan nutricional personalizado',
        'Acceso a área VIP',
        'Casillero personal',
      ],
      popular: false,
    },
    {
      id: 4,
      nombre: 'Plan Trimestral',
      precio: 119.99,
      duracion: 'trimestre',
      caracteristicas: [
        'Acceso completo 24/7',
        'Clases grupales incluidas',
        '2 sesiones con entrenador',
        '15% de descuento vs mensual',
        'Acceso a todas las sedes',
      ],
      popular: false,
    },
    {
      id: 5,
      nombre: 'Plan Anual',
      precio: 399.99,
      duracion: 'año',
      caracteristicas: [
        'Acceso completo 24/7',
        'Clases grupales ilimitadas',
        '6 sesiones con entrenador',
        '30% de descuento vs mensual',
        'Acceso a todas las sedes',
        'Plan nutricional incluido',
      ],
      popular: true,
    },
    {
      id: 6,
      nombre: 'Plan Estudiante',
      precio: 24.99,
      duracion: 'mes',
      caracteristicas: [
        'Acceso completo (horario estudiante)',
        'Clases grupales incluidas',
        'Descuento con ID estudiantil',
        'App de seguimiento básica',
      ],
      popular: false,
    },
  ];

  planesFiltrados: Plan[] = [];
  filtroActual = 'todos';
  soloPopulares = false;

  constructor() {
    this.filtrarPlanes();
  }

  filtrarPlanes() {
    let resultado = [...this.planes];

    // Filtrar por duración
    if (this.filtroActual !== 'todos') {
      resultado = resultado.filter((plan) => {
        switch (this.filtroActual) {
          case 'mensual':
            return plan.duracion === 'mes';
          case 'trimestral':
            return plan.duracion === 'trimestre';
          case 'anual':
            return plan.duracion === 'año';
          default:
            return true;
        }
      });
    }

    // Filtrar por popularidad
    if (this.soloPopulares) {
      resultado = resultado.filter((plan) => plan.popular);
    }

    this.planesFiltrados = resultado;
  }
}
