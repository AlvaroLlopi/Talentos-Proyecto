import Image from 'next/image';

const getPaisData = async (id: string) => {
  const response = await fetch(
    `https://restcountries.com/v3.1/name/${id}?fullText=true`
  );

  const data = await response.json();

  return data || {};
};

export default async function PaisPorIdPage({ params }: any) {
  const data = await getPaisData(params.id);

  return (
    <div className="flex flex-col gap-4 w-full justify-center items-center mt-4">
      <h3>{data[0].name.common}</h3>

      <Image
        src={data[0].flags.png}
        width={100}
        height={100}
        alt={data[0].name.common}
      />

      <Image
        src={data[0].coatOfArms.png}
        width={100}
        height={100}
        alt={data[0].name.common}
      />
    </div>
  );
}
