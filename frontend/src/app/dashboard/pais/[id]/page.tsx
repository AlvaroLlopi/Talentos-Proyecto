import Image from 'next/image';

const getCharacterData = async (id: string) => {
  const response = await fetch(
    `https://rickandmortyapi.com/api/character/${id}`
  );

  const data = await response.json();

  return data || {};
};

export default async function CharacterById({ params }: any) {
  const data = await getCharacterData(params.id);

  return (
    <div className="flex flex-col gap-4 w-full justify-center items-center mt-1">
      <h3>{data.name}</h3>

      <Image
        src={data.image}
        width={300}
        height={300}
        alt={data.name}
      />
    </div>
  );
}

