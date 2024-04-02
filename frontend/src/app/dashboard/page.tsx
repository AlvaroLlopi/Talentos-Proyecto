import { PaisCard } from '@/components/pais-card';

const getDashboardData = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/api/dashboard`
    );

    const data = await response.json();

    return data;
  } catch (error) {
    console.error(error);

    return { data: [] };
  }
};

export default async function DashboardPage() {
  const { data } = await getDashboardData();

  return (
    <div className="flex flex-col gap-4">
      <div>Paises</div>
      <div className="flex items-center gap-y-8 gap-x-2 flex-wrap">
        {data.map((pais: any) => (
          <PaisCard pais={pais} key={pais.name.common} />
        ))}
      </div>
    </div>
  );
}
