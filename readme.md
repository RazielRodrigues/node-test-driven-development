# NODE JS TDD

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



        /**
         * Com o stub é possivel editar o comportamento
         * de uma função, retornando um mock ou até mesmo
         * a execução interna da função
        */
        sandbox.stub(
            todoRepository.schedule,
            functionName
        ).returns(expectedReturn)



        /**
         * O sandbox funciona como um ambiente virtual
         * onde podemos editar os comportamentos do teste
        */
        let sandbox;
        before(() => {
        sandbox = new createSandbox();
        });


        /**
         * dados mock são uteis quando sabemos o que irá
         * retornar de algum lugar seja ele um banco ou uma api
         * pois assim conseguimos validar sem ter de fazer
         * o percurso do codigo
        */
        const mockDatabase = [
            {
                name: 'Narutinho',
                age: 20,
                meta: { revision: 0, created: 1660006668682, version: 0 },
                '$loki': 1
            }
        ];



        /**
         * com o beforeEach inicializando algo que será utilizado
         * por todos os testes nesse escopo.
        */
        let todoService;
        beforeEach(() => {
        const dependecies = {
            todoRepository: {
            list: sandbox.stub().returns(mockDatabase)
            }
        }
            todoService = new TodoService(dependecies);
        });