const { describe, it, before, afterEach } = require('mocha');
const { expect } = require('chai');
const TodoRepository = require('../src/todoRepository');
const { createSandbox } = require('sinon');

describe('todoRepository', () => {
  describe('functions', () => {
    let todoRepository;
    let sandbox;

    before(() => {
      todoRepository = new TodoRepository();
      sandbox = new createSandbox();
    });

    afterEach(() => {
      sandbox.restore();
    });

    it('list', () => {
      const mockDatabase = [
        {
          name: 'Narutinho',
          age: 20,
          meta: { revision: 0, created: 1660006668682, version: 0 },
          '$loki': 1
        }
      ];

      const functionName = "find"
      const expectedReturn = mockDatabase

      sandbox.stub(
        todoRepository.schedule,
        functionName
      ).returns(expectedReturn)

      const result = todoRepository.list()
      expect(result).to.deep.equal(expectedReturn)

      expect(todoRepository.schedule[functionName].calledOnce).to.be.ok

    });

    it('create', () => {
      const functionName = "insertOne"
      const expectedReturn = true

      sandbox.stub(
        todoRepository.schedule,
        functionName
      ).returns(expectedReturn)

      const result = todoRepository.create({ name: 'sasuke' })

      expect(result).to.be.ok
      expect(todoRepository.schedule[functionName].calledOnceWithExactly({ name: 'sasuke' })).to.be.ok

    });

  });
})