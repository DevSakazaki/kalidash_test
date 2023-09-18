import { University } from "@/app/util/models";

async function getUniversities(country: string): Promise<University[]> {
  const response = await fetch(`http://universities.hipolabs.com/search?country=${country}`);
  return response.json();
}

function renderUniversities(universities: University[], universitiesList: HTMLUListElement) {
  universitiesList.innerHTML = ''; // Limpa a lista anterior

  if (universities && universities.length > 0) {
    universities.slice(0, 50).forEach((university) => {
      const listItem = document.createElement('li');
      const link = document.createElement('a');
      link.href = university.web_pages[0];
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      link.className = 'flex-shrink-0 h-40 p-4 border border-gray-300 rounded-md flex flex-col items-center transition duration-300 transform hover:translate-y-[-3px] hover:bg-[#c5c5c5b0] rounded-md shadow-sm relative'; // Adicionado 'relative'

      const strong = document.createElement('strong');
      strong.className = 'text-center justify-center mt-10';
      strong.textContent = university.name;

      // Elemento de texto para "Ir para o website"
      const websiteText = document.createElement('span');
      websiteText.className = 'absolute bottom-2 left-0 right-0 text-center text-green-500 opacity-0 transition-opacity text-[#4da371] font-bold text-lg';
      websiteText.textContent = 'Ir para o website';

      link.appendChild(strong);
      link.appendChild(websiteText); // Adiciona o elemento de texto ao link
      listItem.appendChild(link);
      universitiesList.appendChild(listItem);

      // Evento de passar o mouse para mostrar o texto "Ir para o website"
      link.addEventListener('mouseover', () => {
        websiteText.style.opacity = '1';
      });

      // Evento de retirar o mouse para esconder o texto
      link.addEventListener('mouseout', () => {
        websiteText.style.opacity = '0';
      });
    });
  } else {
    const listItem = document.createElement('li');
    listItem.textContent = 'Nenhuma universidade encontrada';
    universitiesList.appendChild(listItem);
  }
}

async function universities(countryInput: HTMLInputElement, universitiesList: HTMLUListElement) {
  const country = countryInput.value;
  const universities = await getUniversities(country);
  renderUniversities(universities, universitiesList);
}


export default universities;