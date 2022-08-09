const { describe, it, before, afterEach } = require('mocha');
const { expect } = require('chai');
const TodoService = require('../src/todoService');
const Todo = require('../src/todo');

const { createSandbox } = require('sinon');

describe('todoService', () => {

  describe('functions', () => {

    let sandbox;
    before(() => {
      sandbox = new createSandbox();
    });

    describe('list', () => {

      const mockDatabase = [
        {
          name: 'Narutinho',
          age: 20,
          meta: { revision: 0, created: 1660006668682, version: 0 },
          '$loki': 1
        }
      ];

      let todoService;
      beforeEach(() => {
        const dependecies = {
          todoRepository: {
            list: sandbox.stub().returns(mockDatabase)
          }
        }
        todoService = new TodoService(dependecies);
      });

      it('should return list of todos', () => {
        const result = todoService.list();
        const [{ meta, $loki, ...expected }] = mockDatabase
        expect(result).to.be.deep.equal([expected])
      });

    });

    describe('create', () => {

      let todoService;
      beforeEach(() => {
        const dependecies = {
          todoRepository: {
            create: sandbox.stub().returns(true)
          }
        }
        todoService = new TodoService(dependecies);
      });

      it('should not create list of todos', () => {
        const data = new Todo({
          text: '',
          when: ''
        })

        Reflect.deleteProperty(data, "id")

        const expected = {
          error: {
            message: 'Invalid data',
          }
        }

        const result = todoService.create(data)
        expect(result).to.be.deep.equal(expected)

      });

      it('should create', () => {
        const properties = {
          text: 'Hello World',
          when: new Date("2022-01-01")
        }
        const data = new Todo(properties)

        const today = new Date("2023-01-01")
        sandbox.useFakeTimers(today.getTime())

        todoService.create(data)

        const expectedCallWith = {
          ...data,
          status: "late"
        }

        expect(todoService.todoRepository.create.calledOnceWithExactly(expectedCallWith)).to.be.ok

      });

      it('should create due', () => {
        const properties = {
          text: 'Hello World',
          when: new Date("2024-01-01")
        }
        const data = new Todo(properties)

        const today = new Date("2023-01-01")
        sandbox.useFakeTimers(today.getTime())

        todoService.create(data)

        const expectedCallWith = {
          ...data,
          status: "pending"
        }

        expect(todoService.todoRepository.create.calledOnceWithExactly(expectedCallWith)).to.be.ok

      });

    });

  });

})