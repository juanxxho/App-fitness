import { Injectable } from '@angular/core';

export interface User {
  nombre: string;
  objetivo: string;
  nivel: string;
  edad?: number;
  peso?: number;
  altura?: number;
  sesiones?: number;
  fechaRegistro?: Date;
  isAdmin?: boolean;
  email?: string;
}

@Injectable({
  providedIn: 'root',
})
export class UserService {
  currentUser: User | null = null;
  private readonly USER_KEY = 'fitness_user';
  private readonly VISITED_KEY = 'fitness_visited';

  constructor() {
    this.loadUserData();
  }

  loadUserData() {
    const userData = localStorage.getItem(this.USER_KEY);
    if (userData) {
      this.currentUser = JSON.parse(userData);
    }
  }

  saveUser(user: User) {
    user.fechaRegistro = user.fechaRegistro || new Date();
    // Verificar si es admin por email o nombre
    user.isAdmin = this.checkAdminStatus(user);
    this.currentUser = user;
    localStorage.setItem(this.USER_KEY, JSON.stringify(user));
    localStorage.setItem(this.VISITED_KEY, 'true');
  }

  updateUser(updates: Partial<User>) {
    if (this.currentUser) {
      this.currentUser = { ...this.currentUser, ...updates };
      // Verificar admin status al actualizar
      this.currentUser.isAdmin = this.checkAdminStatus(this.currentUser);
      localStorage.setItem(this.USER_KEY, JSON.stringify(this.currentUser));
    }
  }

  logout() {
    this.currentUser = null;
    localStorage.removeItem(this.USER_KEY);
  }

  clearAllData() {
    localStorage.clear();
    this.currentUser = null;
  }

  hasVisited(): boolean {
    return localStorage.getItem(this.VISITED_KEY) === 'true';
  }

  isAdmin(): boolean {
    return this.currentUser?.isAdmin === true;
  }

  private checkAdminStatus(user: User): boolean {
    // Múltiples formas de ser admin
    const adminEmails = [
      'admin@fitnesspro.com',
      'administrador@fitnesspro.com',
    ];
    const adminNames = ['admin', 'administrador', 'Admin', 'Administrador'];

    return (
      adminEmails.includes(user.email || '') ||
      adminNames.includes(user.nombre || '')
    );
  }

  // Método para crear usuario admin de prueba
  createTestAdmin() {
    const adminUser: User = {
      nombre: 'Admin',
      email: 'admin@fitnesspro.com',
      objetivo: 'salud-general',
      nivel: 'avanzado',
      edad: 30,
      peso: 75,
      altura: 175,
      isAdmin: true,
      fechaRegistro: new Date(),
    };
    this.saveUser(adminUser);
    return adminUser;
  }

  incrementSessions() {
    if (this.currentUser) {
      this.currentUser.sesiones = (this.currentUser.sesiones || 0) + 1;
      this.updateUser({ sesiones: this.currentUser.sesiones });
    }
  }

  getDaysActive(): number {
    if (!this.currentUser?.fechaRegistro) return 0;
    const now = new Date();
    const registered = new Date(this.currentUser.fechaRegistro);
    const diffTime = Math.abs(now.getTime() - registered.getTime());
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  }
}
