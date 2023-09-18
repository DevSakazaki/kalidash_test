'use client'

import universities from './universities/page';
import React, { FormEvent } from 'react';

export default function HomePage() {
  async function onSubmit(event: FormEvent) {
    event.preventDefault();

    const countryInput = document.querySelector<HTMLInputElement>('#countryInput');
    const universitiesList = document.querySelector<HTMLUListElement>('#universitiesList');
    const loadingElement = document.querySelector<HTMLDivElement>('#loading');

    if (countryInput && universitiesList && loadingElement) {
      // Mostrar tela de carregamento
      loadingElement.style.display = 'flex'; 

      await universities(countryInput, universitiesList);

      // Esconder tela de carregamento após a pesquisa
      loadingElement.style.display = 'none';
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 md:p-24">
      <div className="flex-row w-full md:w-[72rem]">
        <h1 className="font-sans cursor-default text-[#2D3E40]">
          <b className="text-4xl">
            Quer saber as{' '}
            <p className="text-[#4da371] underline underline-offset-4 m-0 inline">
              melhores universidades
            </p>{' '}
            de seu país?{' '}
          </b>
        </h1>
      </div>
      <div className=" space-x-3 mt-4">
        <form onSubmit={onSubmit} className="flex items-center w-full">
          <input
            id="countryInput"
            type="text"
            className="w-full md:w-[65rem] bg-gray-100 border-gray-300 rounded-md shadow-sm transition ease-in-out focus:bg-gray-200 focus:border-blue-500 focus:shadow-lg duration-300"
            placeholder="Digite o nome de um País! (Em inglês!)"
          />
          <button
            className="ml-3 bg-[#4da371] text-[#2D3E40] text-lg border-gray-300 rounded-md h-10 p-2 transition ease-in-out hover:bg-[#5aa077bb] hover:text-white duration-300"
          >
            <b>Descobrir</b>
          </button>
        </form>
      </div>

      <section className="flex w-full mb-16 md:mb-80 flex-col justify-between mt-4 md:mt-10 p-4 md:p-10 bg-[#f4f4f4] rounded-md shadow-lg">
        <div>
    
          <div
            id="loading"
            style={{ display: 'none' }} // Inicialmente oculto
            className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-[#4da371]"></div>
          </div>

          <ul
            id="universitiesList"
            className="flex flex-col space-y-4 p-4" 
          ></ul>
        </div>
      </section>
    </main>
  );
}
