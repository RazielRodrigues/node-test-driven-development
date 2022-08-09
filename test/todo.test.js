const { describe, it, before } = require('mocha');
const { expect } = require('chai');
const Todo = require('../src/todo');

describe('todo', () => {

    describe('valido', () => {

        it('invalid when without text', () => {

            /**
             * A ideia aqui é testar a propria classe e ver primeiro se
             * a construção da classe é válida e todos os argumentos
             * estão setados, graças a injeção de dependencia
             * é possivel validar os parametros da classe 
             * utilizando os testes unitarios
             */
            const data = {
                text: '',
                when: new Date("2020-01-01")
            }
            const todo = new Todo(data);
            const result = todo.isValid();

            // função que certifica se deu certo
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