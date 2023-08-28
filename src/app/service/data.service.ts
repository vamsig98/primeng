import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
  getData() {
    return {
      data: {
        tasks: [
          {
            id: 1,
            title: 'Learn about Polymer',
            due_date: 1649625594000,
            tags: ['high'],
            completed: true,
            starred: true,
            deleted: false,
            owner: {
              id: 1,
              first: 'Darlene',
              last: 'Shields',
            },
          },
          {
            id: 2,
            title: 'Watch Pluralsight course on Docker',
            due_date: 1649884794000,
            tags: ['update'],
            completed: true,
            starred: false,
            deleted: false,
            owner: {
              id: 4,
              first: 'Jacob',
              last: 'Ramirez',
            },
          },
          {
            id: 3,
            title: 'Complete presentation prep for Aurelia presentation',
            due_date: 1650057594000,
            tags: ['blocked', 'high'],
            completed: false,
            starred: true,
            deleted: false,
            owner: {
              id: 3,
              first: 'Semantha',
              last: 'Mills',
            },
          },
          {
            id: 4,
            title: 'Instrument creation of development environment with Puppet',
            due_date: 1650489594000,
            tags: ['low'],
            completed: false,
            starred: false,
            deleted: false,
            owner: {
              id: 2,
              first: 'Pete',
              last: 'Jackson',
            },
          },
          {
            id: 5,
            title: 'Transition code base to ES6',
            due_date: 1651785594000,
            tags: ['low'],
            completed: false,
            starred: false,
            deleted: true,
            owner: {
              id: 5,
              first: 'Cindy',
              last: 'Powell',
            },
          },
          {
            id: 6,
            title: 'Zoom call with the client',
            due_date: 1653859194000,
            tags: ['medium'],
            completed: true,
            starred: true,
            deleted: false,
            owner: {
              id: 5,
              first: 'Cindy',
              last: 'Powell',
            },
          },
          {
            id: 6,
            title: 'Meet with the boss for coffee',
            due_date: 1654118394000,
            tags: ['high'],
            completed: false,
            starred: true,
            deleted: false,
            owner: {
              id: 6,
              first: 'Adam',
              last: 'Carillo',
            },
          },
        ],
      },
    };
  }
}
