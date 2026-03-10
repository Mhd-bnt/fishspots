export default [
  {
    url: "/api/fishspots",
    method: "get",
    response: () => {
      return {
        code: 200,
        data: [
          {
            id: 1,
            name: "Lac de la Forêt",
            type: "Lac",
            fish: ["Carpe", "Brochet"],
            rating: 4.5,
            image: "https://picsum.photos/seed/lake1/400/300",
          },
          {
            id: 2,
            name: "Rivière du Moulin",
            type: "Rivière",
            fish: ["Truite", "Perche"],
            rating: 4.2,
            image: "https://picsum.photos/seed/river1/400/300",
          },
          {
            id: 3,
            name: "Étang des Saules",
            type: "Étang",
            fish: ["Carpe", "Sandre"],
            rating: 3.8,
            image: "https://picsum.photos/seed/pond1/400/300",
          },
          {
            id: 4,
            name: "Canal Saint-Martin",
            type: "Canal",
            fish: ["Perche", "Silure"],
            rating: 3.5,
            image: "https://picsum.photos/seed/canal1/400/300",
          },
        ],
      };
    },
  },
  {
    url: "/api/post-data",
    method: "post",
    timeout: 1000, // Simulation de latence réseau
    response: ({ body }) => {
      return {
        code: 200,
        message: "Données reçues avec succès",
        received: body,
      };
    },
  },
];
