import Image from 'next/image';

const getCharacterData = async (id: string) => {
  const response = await fetch(
    `https://futuramaapi.com/api/characters/${id}`
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
        width={100}
        height={100}
        alt={data.name}
      />
      <p>{data.gender}</p>
      <p>{data.status}</p>
      <p>{data.species}</p>
    </div>
  );
}