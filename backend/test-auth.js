import request from 'supertest';
import express from 'express';
import mongoose from 'mongoose';
import { expect } from 'chai';
import app from './server.js'; // Adjust import based on your export

describe('Authentication API Tests', () => {
  before(async () => {
    // Connect to test database
    await mongoose.connect(process.env.TEST_MONGO_URI || 'mongodb://localhost:27017/test-db');
  });

  after(async () => {
    // Clean up and close connection
    await mongoose.connection.dropDatabase();
    await mongoose.connection.close();
  });

  let token = '';

  describe('POST /api/auth/signup', () => {
    it('should create a new user', async () => {
      const userData = {
        name: 'Test User',
        email: 'test@example.com',
        password: 'password123',
        role: 'user'
      };

      const response = await request(app)
        .post('/api/auth/signup')
        .send(userData)
        .expect(201);

      expect(response.body).to.have.property('_id');
      expect(response.body).to.have.property('token');
      expect(response.body.name).to.equal(userData.name);
      expect(response.body.email).to.equal(userData.email);
    });

    it('should not create user with existing email', async () => {
      const userData = {
        name: 'Test User 2',
        email: 'test@example.com',
        password: 'password123'
      };

      await request(app)
        .post('/api/auth/signup')
        .send(userData)
        .expect(400);
    });
  });

  describe('POST /api/auth/login', () => {
    it('should login with correct credentials', async () => {
      const loginData = {
        email: 'test@example.com',
        password: 'password123'
      };

      const response = await request(app)
        .post('/api/auth/login')
        .send(loginData)
        .expect(200);

      expect(response.body).to.have.property('token');
      token = response.body.token;
    });

    it('should not login with wrong password', async () => {
      const loginData = {
        email: 'test@example.com',
        password: 'wrongpassword'
      };

      await request(app)
        .post('/api/auth/login')
        .send(loginData)
        .expect(401);
    });
  });

  describe('GET /api/auth/me', () => {
    it('should get user data with valid token', async () => {
      const response = await request(app)
        .get('/api/auth/me')
        .set('Authorization', `Bearer ${token}`)
        .expect(200);

      expect(response.body).to.have.property('_id');
      expect(response.body.email).to.equal('test@example.com');
    });

    it('should not get user data without token', async () => {
      await request(app)
        .get('/api/auth/me')
        .expect(401);
    });
  });
});
