const { describe, it, before } = require('mocha');
const { expect } = require('chai');
const Todo = require('../src/todo');

describe('todo', () => {

    describe('valido', () => {

        it('invalid when without text', () => {
            const data = {
                text: '',
                when: new Date("2020-01-01")
            }
            const todo = new Todo(data);
            const result = todo.isValid();

            expect(result).to.be.not.ok;

        });

        it('invalid date', () => {

            const data = {
                text: '',
                when: new Date("2020-99-99")
            }
            const todo = new Todo(data);
            const result = todo.isValid();

            expect(result).to.be.not.ok;

        });

        it('should have id', () => {

            const data = {
                text: 'hello',
                when: new Date("2022-01-01")
            }

            const todo = new Todo(data);
            const result = todo.isValid();

            expect(result).to.be.ok;

        });

    })

})