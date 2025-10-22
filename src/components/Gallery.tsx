const images = [
  {
    id: 1,
    url: "https://cdn.poehali.dev/projects/9e34e272-60cb-4d86-8731-1e28d7a7c49f/files/7490531f-de0e-4ad9-9d0e-0fbb796bd3d2.jpg",
    title: "Горные вершины"
  },
  {
    id: 2,
    url: "https://cdn.poehali.dev/projects/9e34e272-60cb-4d86-8731-1e28d7a7c49f/files/5e60877b-1b0f-4785-9559-49475057f5d5.jpg",
    title: "Тропический рай"
  },
  {
    id: 3,
    url: "https://cdn.poehali.dev/projects/9e34e272-60cb-4d86-8731-1e28d7a7c49f/files/5cb19f56-2445-4a24-ba59-25a65c5a2159.jpg",
    title: "Историческая архитектура"
  },
  {
    id: 4,
    url: "https://cdn.poehali.dev/projects/9e34e272-60cb-4d86-8731-1e28d7a7c49f/files/7490531f-de0e-4ad9-9d0e-0fbb796bd3d2.jpg",
    title: "Природные красоты"
  },
  {
    id: 5,
    url: "https://cdn.poehali.dev/projects/9e34e272-60cb-4d86-8731-1e28d7a7c49f/files/5e60877b-1b0f-4785-9559-49475057f5d5.jpg",
    title: "Океанские пейзажи"
  },
  {
    id: 6,
    url: "https://cdn.poehali.dev/projects/9e34e272-60cb-4d86-8731-1e28d7a7c49f/files/5cb19f56-2445-4a24-ba59-25a65c5a2159.jpg",
    title: "Культурное наследие"
  }
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-20 px-4 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Фотогалерея</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Взгляните на живописные места, которые вы сможете посетить
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image) => (
            <div
              key={image.id}
              className="group relative overflow-hidden rounded-lg aspect-[4/3] cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white text-xl font-semibold drop-shadow-lg">
                    {image.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
