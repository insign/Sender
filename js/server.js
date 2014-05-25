sender = {
    locked: false,
    init: function() {
        this.version = 1;
        if ($debug) {
            ax_url = 'http://192.168.3.222/encomen.de/beta/ed-laravel2/public/sender/api';
//            ax_url = 'http://localhost/encomen.de/beta/ed-laravel2/public/sender/api';
        } else {
            ax_url = 'http://encomen.de/sender/api';
        }
        this.solicita(); // @TODO Remover isso e colocar o timer
    },
    solicita: function() {
        ax = $.ajax({
            url: ax_url + '/solicita',
            cache: false,
            data: {version: this.version},
            beforeSend: function() {
                this.locked = true;
            }

        });

        ax.done(function(R) {
            console.info('Sucesso', R);
            // Receber DADOS, com SMSs para enviar
            $.each(R.msgs, function(id, msg) {
                alert(id + ": " + msg);
            });
            // Enviar SMS
            // Confirmar se com sucesso, destravar se com falha

        });

        ax.always(function() {
            this.locked = false;
        });
    },
    start: function() {

    },
    stop: function() {

    }
};