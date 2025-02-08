import mePhoto from '../../assets/me-photoo.jpeg';

export function AboutModal() {
  return (
    <div className="flex flex-col md:flex-row gap-10 items-start max-w-4xl mx-auto">
      {/* Coluna da foto */}
      <div className="w-full md:w-2/5">
        <div className="relative w-full md:max-w-[320px] mx-auto">
          <img 
            src={mePhoto}
            alt="Giselly"
            className="relative w-full rounded-2xl object-cover
                     shadow-[rgba(17,_17,_26,_0.1)_0px_8px_24px,_rgba(17,_17,_26,_0.1)_0px_16px_56px,_rgba(17,_17,_26,_0.1)_0px_24px_80px]
                     border border-gray-100
                     aspect-[3/4]"
          />
        </div>
      </div>

      {/* Coluna do texto */}
      <div className="w-full md:w-3/5 space-y-6">
        <div className="inline-block px-4 py-2 rounded-full bg-primary-50/50 border border-primary-100">
          <p className="text-primary-600 text-sm font-medium">
            Um pouco sobre mim ✨
          </p>
        </div>

        <div className="space-y-4 text-gray-700 text-[15px]">
          <p className="leading-relaxed">
            Tenho 23 anos, moro em São Luís do Maranhão, mais conhecida como 'Ilha do Amor' (terra de praias lindas) e, 
            bem... minha trajetória até aqui foi um pouquinho inusitada. Comecei cursando Enfermagem — sim, 
            totalmente aleatório, né? Mas tudo mudou quando meu irmão, que já estava na área de tecnologia, 
            me mostrou esse universo incrível do desenvolvimento. Desde então, 
            mergulhei de cabeça nesse mundo e tenho curtido muito cada passo dessa jornada.
          </p>

          <p className="leading-relaxed">
            Sou cristã, adoro assistir filmes, gosto do universo dos super-heróis (Marvel ou DC? 
            Difícil escolher só um lado!) e, claro, não posso deixar de mencionar meu amor por uma 
            boa coquinha gelada — afinal, ninguém é de ferro, né? 😂
          </p>

          <p className="leading-relaxed">
            Fora isso, gosto de levar a vida com leveza, aprendendo sempre algo novo e tentando 
            transformar desafios em oportunidades. 
          </p>
        </div>

        <div className="pt-2">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-primary-200/50 to-transparent" />
          <p className="text-center text-primary-500 font-medium mt-3 text-sm">
            Enfim, essa sou eu!
          </p>
        </div>
      </div>
    </div>
  );
} 