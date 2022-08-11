class NinjaController {

    create(){
        return 'create';
    }

    read(){
        return 'read';
    }

    readOne(id){
        return 'readOne';
    }

    update(id, data){
        return 'update';
    }

    delete(id){
        return 'delete';
    }

}

module.exports = NinjaController;