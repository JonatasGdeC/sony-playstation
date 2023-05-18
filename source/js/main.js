$(document).ready(function(){
    $('#todos-consoles').slick({
        centerMode: false,
        infinite: false,
        speed: 300,
        slidesToShow: 3,
        responsive: [
        {
            breakpoint: 1024,
            settings: {
            arrows: true,
            centerMode: false,
            centerPadding: '40px',
            slidesToShow: 2
            }
        },
        {
            breakpoint: 770,
            settings: {
            arrows: false,
            centerMode: false,
            centerPadding: '40px',
            slidesToShow: 1,
            dots: false,
            }
        }
        ]
    });


    $("#telefone").mask('(00)00000-0000');

    $("#form-modal").validate({
        rules:{
            nome:{
                required:true
            },
            telefone:{
                required:true
            },
            email:{
                required:true
            },
            endereco:{
                required:true
            },
            jogo:{
                required:false
            }
        }, messages:{
            nome:"<span>Preencha seu nome!</span>",
            telefone: "<span>Digite seu telefone/celular!</span>",
            email: "<span>Digite um email válido!</span>",
            endereco:"<span>Preencha com seu endereço!</span>"
        }, 
        submitHandler: function(form){
            const mensagem = document.getElementById('mensagem-alerta')
            const toast = new bootstrap.Toast(mensagem);
            toast.show();
        }
});

    $('.card button').click(function(){
        const nomeJogo = $(this).parent().find('#nomejogo').text(); 
        $('#jogo').val(nomeJogo);
    });

    $('#jogos-capa-ps5, #jogos-capa-ps4, #jogos-capa-ps3, #jogos-capa-ps2').slick({
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3,
        responsive: [
        {
            breakpoint: 1024,
            settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 2
            }
        },
        {
            breakpoint: 770,
            settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 1,
            dots: false,
            }
        }
        ]
    });

    $("#form-mensagem").validate({
        rules:{
            seunome:{
                required:true
            },
            seuemail:{
                required:true
            },
            seutelefone:{
                required:false
            },
            suamensagem:{
                required:true
            }
        },
        messages:{
            seunome:"<span class='mensagem-error'>Preencha seu nome!</span>",
            seuemail: "<span class='mensagem-error'>Digite um email válido!</span>",
            suamensagem:"<span class='mensagem-error'>Escreva sua mensagem!</span>"
        }
    });

})