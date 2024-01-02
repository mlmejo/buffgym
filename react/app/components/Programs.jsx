async function getPrograms() {
  const res = await fetch("http://127.0.0.1:1337/api/programs");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return (await res.json()).data;
}

function ProgramCard({ title, content }) {
  return (
    <div className="group flex h-full flex-col rounded-xl bg-stone-900 shadow-sm">
      <div className="p-4 md:p-6">
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        <p className="mt-8 text-gray-200">{content}</p>
      </div>
    </div>
  );
}

export default async function Programs() {
  const programs = await getPrograms();

  return (
    <div className="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      <h2 className="text-center text-2xl font-bold uppercase  md:text-4xl md:leading-tight">
        Our <span className="text-violet-600">Programs</span>
      </h2>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {programs &&
          programs.map((program) => {
            return (
              <ProgramCard
                key={crypto.randomUUID()}
                title={program.attributes.title}
                content={program.attributes.content}
              />
            );
          })}
      </div>
    </div>
  );
}
