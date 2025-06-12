import { Component, type OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from '../../components/footer/footer.component';

interface Entrenador {
  id: number;
  nombre: string;
  especialidad: string;
  experiencia: number;
  descripcion: string;
  imagen: string;
  disponibilidad: string[];
  calificacion: number;
}

@Component({
  selector: 'app-entrenadores',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, FooterComponent],
  template: `
    <!-- Hero Section -->
    <section class="bg-primary text-white py-5">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6">
            <h1 class="display-4 fw-bold mb-4 slide-in">
              Nuestro Equipo de Entrenadores
            </h1>
            <p class="lead mb-4">
              Conoce a los profesionales que te guiarán en tu camino hacia una
              vida más saludable y en forma.
            </p>
          </div>
          <div class="col-lg-6">
            <img
              src="https://www.shutterstock.com/image-photo/indoor-personal-cardio-training-gym-600nw-1822207589.jpg"
              alt="Equipo de entrenadores"
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
                [(ngModel)]="filtroEspecialidad"
                (change)="filtrarEntrenadores()"
              >
                <option value="todos">Todas las especialidades</option>
                <option value="Musculación">Musculación</option>
                <option value="Cardio">Cardio</option>
                <option value="Yoga">Yoga</option>
                <option value="Crossfit">Crossfit</option>
                <option value="Nutrición">Nutrición</option>
              </select>
            </div>
          </div>
          <div class="col-md-6">
            <div class="input-group">
              <span class="input-group-text">
                <i class="fas fa-sort"></i>
              </span>
              <select
                class="form-select"
                [(ngModel)]="ordenActual"
                (change)="ordenarEntrenadores()"
              >
                <option value="nombre">Ordenar por nombre</option>
                <option value="experiencia">Ordenar por experiencia</option>
                <option value="calificacion">Ordenar por calificación</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Trainers Section -->
    <section class="py-5">
      <div class="container">
        <div class="row g-4">
          <div
            *ngFor="let entrenador of entrenadoresFiltrados"
            class="col-lg-4 col-md-6"
          >
            <div class="card h-100">
              <img
                [src]="entrenador.imagen"
                [alt]="entrenador.nombre"
                class="card-img-top"
                style="object-fit: cover; object-position: top; width: 100%; height: 300px;"
              />
              <div class="card-body">
                <div
                  class="d-flex justify-content-between align-items-center mb-2"
                >
                  <h3 class="card-title mb-0">{{ entrenador.nombre }}</h3>
                  <div class="badge bg-primary">
                    {{ entrenador.especialidad }}
                  </div>
                </div>
                <div class="mb-3">
                  <div class="d-flex align-items-center">
                    <div class="me-2">
                      <i class="fas fa-star text-warning"></i>
                      {{ entrenador.calificacion }}
                    </div>
                    <div class="text-muted">
                      <i class="fas fa-briefcase me-1"></i>
                      {{ entrenador.experiencia }} años
                    </div>
                  </div>
                </div>
                <p class="card-text">{{ entrenador.descripcion }}</p>
                <h6 class="mb-2">Disponibilidad:</h6>
                <div class="d-flex flex-wrap gap-1 mb-3">
                  <span
                    *ngFor="let dia of entrenador.disponibilidad"
                    class="badge bg-light text-dark"
                  >
                    {{ dia }}
                  </span>
                </div>
              </div>
              <div
                class="card-footer bg-transparent border-0 d-flex justify-content-between"
              >
                <button class="btn btn-outline-primary">Ver Perfil</button>
                <button class="btn btn-primary">Agendar Sesión</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section class="py-5 bg-light">
      <div class="container">
        <div class="row mb-5">
          <div class="col-12 text-center">
            <h2 class="display-5 fw-bold">Lo que dicen nuestros clientes</h2>
            <p class="lead">
              Testimonios de personas que han entrenado con nuestros
              profesionales
            </p>
          </div>
        </div>

        <div class="row">
          <div class="col-lg-4 mb-4">
            <div class="card h-100">
              <div class="card-body">
                <div class="mb-3">
                  <i class="fas fa-star text-warning"></i>
                  <i class="fas fa-star text-warning"></i>
                  <i class="fas fa-star text-warning"></i>
                  <i class="fas fa-star text-warning"></i>
                  <i class="fas fa-star text-warning"></i>
                </div>
                <p class="card-text">
                  "Carlos es un entrenador excepcional. Su conocimiento y
                  dedicación me ayudaron a superar mis límites y alcanzar mis
                  objetivos de fitness en tiempo récord."
                </p>
              </div>
              <div class="card-footer bg-transparent">
                <div class="d-flex align-items-center">
                  <img
                    src="https://i.pinimg.com/736x/ab/48/f1/ab48f186dc489030ba8e2f6911e928f6.jpg"
                    alt="Cliente"
                    class="rounded-circle me-3"
                    width="50"
                    height="50"
                  />
                  <div>
                    <h6 class="mb-0">Ana Martínez</h6>
                    <small class="text-muted">Cliente desde 2022</small>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-4 mb-4">
            <div class="card h-100">
              <div class="card-body">
                <div class="mb-3">
                  <i class="fas fa-star text-warning"></i>
                  <i class="fas fa-star text-warning"></i>
                  <i class="fas fa-star text-warning"></i>
                  <i class="fas fa-star text-warning"></i>
                  <i class="fas fa-star text-warning"></i>
                </div>
                <p class="card-text">
                  "Las clases de yoga con Laura han transformado mi vida. No
                  solo he mejorado mi flexibilidad, sino que también he
                  encontrado paz mental y mejor calidad de sueño."
                </p>
              </div>
              <div class="card-footer bg-transparent">
                <div class="d-flex align-items-center">
                  <img
                    src="https://i.pinimg.com/736x/d9/7e/2f/d97e2fe552e8b825fea8839fe53f392e.jpg"
                    alt="Cliente"
                    class="rounded-circle me-3"
                    width="50"
                    height="50"
                  />
                  <div>
                    <h6 class="mb-0">Roberto Sánchez</h6>
                    <small class="text-muted">Cliente desde 2021</small>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-4 mb-4">
            <div class="card h-100">
              <div class="card-body">
                <div class="mb-3">
                  <i class="fas fa-star text-warning"></i>
                  <i class="fas fa-star text-warning"></i>
                  <i class="fas fa-star text-warning"></i>
                  <i class="fas fa-star text-warning"></i>
                  <i class="fas fa-star-half-alt text-warning"></i>
                </div>
                <p class="card-text">
                  "Miguel diseñó un plan nutricional que complementa
                  perfectamente mi rutina de entrenamiento. He perdido 15 kg en
                  6 meses de manera saludable y sostenible."
                </p>
              </div>
              <div class="card-footer bg-transparent">
                <div class="d-flex align-items-center">
                  <img
                    src="https://i.pinimg.com/736x/4f/2e/ca/4f2eca320b404c7a602d7c2dd356fd3c.jpg"
                    alt="Cliente"
                    class="rounded-circle me-3"
                    width="50"
                    height="50"
                  />
                  <div>
                    <h6 class="mb-0">Patricia López</h6>
                    <small class="text-muted">Cliente desde 2023</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Join Team Section -->
    <section class="py-5">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6 mb-4 mb-lg-0">
            <h2 class="display-5 fw-bold mb-4">¿Eres entrenador?</h2>
            <p class="lead mb-4">
              Únete a nuestro equipo de profesionales y ayuda a más personas a
              alcanzar sus metas fitness.
            </p>
            <ul class="list-unstyled mb-4">
              <li class="mb-2">
                <i class="fas fa-check-circle text-primary me-2"></i>
                Horarios flexibles
              </li>
              <li class="mb-2">
                <i class="fas fa-check-circle text-primary me-2"></i>
                Excelente compensación
              </li>
              <li class="mb-2">
                <i class="fas fa-check-circle text-primary me-2"></i>
                Desarrollo profesional continuo
              </li>
              <li class="mb-2">
                <i class="fas fa-check-circle text-primary me-2"></i>
                Instalaciones de primera clase
              </li>
            </ul>
            <button class="btn btn-primary">Postúlate Ahora</button>
          </div>
          <div class="col-lg-6">
            <img
              src="https://i.pinimg.com/736x/5d/0c/17/5d0c17a15762dcf2eb6cef2d07318ac9.jpg"
              alt="Únete a nuestro equipo"
              class="img-fluid rounded"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <app-footer></app-footer>
  `,
  styleUrls: ['./entrenadores.component.scss'],
})
export class EntrenadoresComponent implements OnInit {
  entrenadores: Entrenador[] = [
    {
      id: 1,
      nombre: 'Carlos Rodríguez',
      especialidad: 'Musculación',
      experiencia: 8,
      descripcion:
        'Especialista en hipertrofia y fuerza. Campeón nacional de culturismo 2019.',
      imagen:
        'https://i.pinimg.com/736x/63/2b/6a/632b6a58fa0da953a9281af6476679da.jpg',
      disponibilidad: ['Lunes', 'Martes', 'Jueves', 'Viernes'],
      calificacion: 4.9,
    },
    {
      id: 2,
      nombre: 'Laura Gómez',
      especialidad: 'Yoga',
      experiencia: 6,
      descripcion:
        'Instructora certificada de Hatha y Vinyasa Yoga con enfoque en mindfulness.',
      imagen:
        'https://i.pinimg.com/736x/4b/99/4c/4b994ca5896976bc28b5e26d647decab.jpg',
      disponibilidad: ['Lunes', 'Miércoles', 'Viernes', 'Sábado'],
      calificacion: 4.8,
    },
    {
      id: 3,
      nombre: 'Miguel Ángel Torres',
      especialidad: 'Nutrición',
      experiencia: 10,
      descripcion:
        'Nutricionista deportivo con maestría en nutrición clínica y deportiva.',
      imagen:
        'https://i.pinimg.com/736x/ba/6a/57/ba6a5740e69b424afc3c8c075fe55634.jpg',
      disponibilidad: ['Martes', 'Miércoles', 'Jueves', 'Sábado'],
      calificacion: 4.7,
    },
    {
      id: 4,
      nombre: 'Ana Martínez',
      especialidad: 'Cardio',
      experiencia: 5,
      descripcion:
        'Especialista en entrenamiento HIIT y pérdida de peso. Maratonista.',
      imagen:
        'https://i.pinimg.com/736x/f8/aa/62/f8aa629d61b8005d2c323c2d4a056c38.jpg',
      disponibilidad: ['Lunes', 'Miércoles', 'Viernes', 'Domingo'],
      calificacion: 4.6,
    },
    {
      id: 5,
      nombre: 'Roberto Sánchez',
      especialidad: 'Crossfit',
      experiencia: 7,
      descripcion:
        'Entrenador certificado de CrossFit nivel 3 y ex-atleta profesional.',
      imagen:
        'https://i.pinimg.com/736x/67/7c/51/677c51d80ba826e13b02f52880a06277.jpg',
      disponibilidad: ['Martes', 'Jueves', 'Sábado', 'Domingo'],
      calificacion: 4.9,
    },
    {
      id: 6,
      nombre: 'Patricia López',
      especialidad: 'Musculación',
      experiencia: 9,
      descripcion:
        'Especialista en entrenamiento para mujeres y preparadora física.',
      imagen:
        'https://i.pinimg.com/736x/61/75/05/6175055a98b055384d26c112dcffdc8b.jpg',
      disponibilidad: ['Lunes', 'Martes', 'Jueves', 'Viernes'],
      calificacion: 4.8,
    },
  ];

  entrenadoresFiltrados: Entrenador[] = [];
  filtroEspecialidad = 'todos';
  ordenActual = 'nombre';

  ngOnInit() {
    this.filtrarEntrenadores();
  }

  filtrarEntrenadores() {
    if (this.filtroEspecialidad === 'todos') {
      this.entrenadoresFiltrados = [...this.entrenadores];
    } else {
      this.entrenadoresFiltrados = this.entrenadores.filter(
        (e) => e.especialidad === this.filtroEspecialidad
      );
    }

    this.ordenarEntrenadores();
  }

  ordenarEntrenadores() {
    switch (this.ordenActual) {
      case 'nombre':
        this.entrenadoresFiltrados.sort((a, b) =>
          a.nombre.localeCompare(b.nombre)
        );
        break;
      case 'experiencia':
        this.entrenadoresFiltrados.sort(
          (a, b) => b.experiencia - a.experiencia
        );
        break;
      case 'calificacion':
        this.entrenadoresFiltrados.sort(
          (a, b) => b.calificacion - a.calificacion
        );
        break;
    }
  }
}
