import { Injectable } from '@angular/core';

export interface Rutina {
  id: string;
  nombre: string;
  descripcion: string;
  objetivo: string;
  nivel: string;
  duracion: number;
  ejercicios: string[];
  imagen?: string;
}

@Injectable({
  providedIn: 'root',
})
export class RutinaService {
  private readonly RUTINAS_KEY = 'fitness_rutinas';
  private rutinas: Rutina[] = [];

  constructor() {
    this.loadRutinas();
    if (this.rutinas.length === 0) {
      this.initializeDefaultRutinas();
    }
  }

  private initializeDefaultRutinas() {
    const defaultRutinas: Rutina[] = [
      {
        id: '1',
        nombre: 'Rutina Principiante',
        descripcion: 'Perfecta para comenzar tu journey fitness',
        objetivo: 'perdida-peso',
        nivel: 'principiante',
        duracion: 30,
        ejercicios: ['Sentadillas', 'Flexiones', 'Plancha', 'Burpees'],
      },
      {
        id: '2',
        nombre: 'Fuerza Intermedia',
        descripcion: 'Desarrolla tu fuerza con ejercicios más desafiantes',
        objetivo: 'ganancia-muscular',
        nivel: 'intermedio',
        duracion: 45,
        ejercicios: [
          'Press de banca',
          'Sentadilla con peso',
          'Peso muerto',
          'Dominadas',
        ],
      },
      {
        id: '3',
        nombre: 'Cardio Avanzado',
        descripcion: 'Rutina intensa para quemar calorías',
        objetivo: 'perdida-peso',
        nivel: 'avanzado',
        duracion: 60,
        ejercicios: [
          'HIIT',
          'Mountain climbers',
          'Jump squats',
          'Sprint intervals',
        ],
      },
    ];

    this.rutinas = defaultRutinas;
    this.saveRutinas();
  }

  getRutinas(): Rutina[] {
    return this.rutinas;
  }

  getRutinasByUser(objetivo: string, nivel: string): Rutina[] {
    return this.rutinas.filter(
      (rutina) => rutina.objetivo === objetivo || rutina.nivel === nivel
    );
  }

  addRutina(rutina: Rutina) {
    rutina.id = Date.now().toString();
    this.rutinas.push(rutina);
    this.saveRutinas();
  }

  updateRutina(id: string, updates: Partial<Rutina>) {
    const index = this.rutinas.findIndex((r) => r.id === id);
    if (index !== -1) {
      this.rutinas[index] = { ...this.rutinas[index], ...updates };
      this.saveRutinas();
    }
  }

  deleteRutina(id: string) {
    this.rutinas = this.rutinas.filter((r) => r.id !== id);
    this.saveRutinas();
  }

  private loadRutinas() {
    const data = localStorage.getItem(this.RUTINAS_KEY);
    if (data) {
      this.rutinas = JSON.parse(data);
    }
  }

  private saveRutinas() {
    localStorage.setItem(this.RUTINAS_KEY, JSON.stringify(this.rutinas));
  }
}
