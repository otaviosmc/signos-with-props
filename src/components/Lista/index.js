import React from "react";
import Signo from "../Signo";

export default function Lista() {
  return (
    <div className="flex flex-wrap justify-center gap-8 h-full items-center py-9">
      <Signo
        signo="Aquário"
        img="/assets/aquario.jpg"
        datai="21/01"
        dataf="19/02"
      />
      <Signo
        signo="Peixes"
        img="/assets/peixes.jpg"
        datai="20/02"
        dataf="20/03"
      />
      <Signo
        signo="Áries"
        img="/assets/aries.jpg"
        datai="21/03"
        dataf="20/04"
      />
      <Signo
        signo="Touro"
        img="/assets/touro.jpg"
        datai="21/04"
        dataf="21/05"
      />
      <Signo
        signo="Gêmeos"
        img="/assets/gemeos.jpg"
        datai="22/05"
        dataf="21/06"
      />
      <Signo
        signo="Câncer"
        img="/assets/cancer.jpg"
        datai="21/06"
        dataf="23/07"
      />
      <Signo signo="Leão" img="/assets/leao.jpg" datai="24/07" dataf="23/08" />
      <Signo
        signo="Virgem"
        img="/assets/virgem.jpg"
        datai="24/08"
        dataf="23/09"
      />
      <Signo
        signo="Libra"
        img="/assets/libra.jpg"
        datai="24/09"
        dataf="23/10"
      />
      <Signo
        signo="Escorpião"
        img="/assets/escorpiao.jpg"
        datai="24/10"
        dataf="22/11"
      />
      <Signo
        signo="Sagitário"
        img="/assets/sagitario.jpg"
        datai="23/11"
        dataf="21/12"
      />
      <Signo
        signo="Capricórnio"
        img="/assets/capricornio.jpg"
        datai="22/12"
        dataf="20/01"
      />
    </div>
  );
}
