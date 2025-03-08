import express from "express";
import cors from "cors";

const app = express();
const PORT = 3001;
app.use(express.json());
app.use(cors());

const musicData = [
  {
    collections: [
      {
        id: "12345",
        name: "EPIC: The Troy Saga (Official Concept Album)",
        artist: "Jorge Rivera-Herrans",
        type: "EP",
        songCount: 5,
        durationInSeconds: 900,
        sizeInBytes: "45 MB",
        releasedOn: "2024-09-03T14:35:00Z",
        songs: [
          {
            name: "The Horse and the Infant",
            performers:
              "Jorge Rivera-Herrans, Luke Holt & Cast of EPIC: The Musical",
            duration: "00:02:15",
            size: "15 MB",
          },
          {
            name: "Just a Man",
            performers: "Jorge Rivera-Herrans & Cast of EPIC: The Musical",
            duration: "00:02:30",
            size: "16 MB",
          },
          {
            name: "Full Speed Ahead",
            performers:
              "Jorge Rivera-Herrans, Armando Julián, Steven Dookie & Cast of EPIC: The Musical",
            duration: "00:05:10",
            size: "24 MB",
          },
          {
            name: "Open Arms",
            performers: "Jorge Rivera-Herrans & Steven Dookie",
            duration: "00:05:10",
            size: "23 MB",
          },
          {
            name: "Warrior of the Mind",
            performers:
              "Jorge Rivera-Herrans, Teagan Earley & Cast of EPIC: The Musical",
            duration: "00:05:10",
            size: "23 MB",
          },
        ],
      },
      {
        id: "12346",
        name: "Jude",
        artist: "Saga Songs",
        type: "Album",
        songCount: 12,
        durationInSeconds: 3200,
        sizeInBytes: "70 MB",
        releasedOn: "2025-01-15T10:00:00Z",
        songs: [
          {
            name: "The Horse and the Infant 1",
            performers: "Saga Songs, Luke Holt & Cast of EPIC: The Musical",
            duration: "00:02:15",
            size: "15 MB",
          },
          {
            name: "Just a Man 1",
            performers: "Saga Songs & Cast of EPIC: The Musical",
            duration: "00:02:30",
            size: "16 MB",
          },
          {
            name: "Full Speed Ahead 1",
            performers:
              "Saga Songs, Armando Julián, Steven Dookie & Cast of EPIC: The Musical",
            duration: "00:05:10",
            size: "24 MB",
          },
          {
            name: "Open Arms 1",
            performers: "Saga Songs & Steven Dookie",
            duration: "00:05:10",
            size: "23 MB",
          },
          {
            name: "Warrior of the Mind 1",
            performers: "Saga Songs, Teagan Earley & Cast of EPIC: The Musical",
            duration: "00:05:10",
            size: "23 MB",
          },
        ],
      },
      {
        id: "12347",
        name: "Anirudh Hits",
        artist: "Jorge Rivera-Herrans",
        type: "Single",
        songCount: 1,
        durationInSeconds: 210,
        sizeInBytes: "30 MB",
        releasedOn: "2023-06-10T08:30:00Z",
        songs: [
          {
            name: "The Horse and the Infant 1",
            performers: "Saga Songs, Luke Holt & Cast of EPIC: The Musical",
            duration: "00:02:15",
            size: "15 MB",
          },
          {
            name: "Just a Man 1",
            performers: "Saga Songs & Cast of EPIC: The Musical",
            duration: "00:02:30",
            size: "16 MB",
          },
          {
            name: "Full Speed Ahead 1",
            performers:
              "Saga Songs, Armando Julián, Steven Dookie & Cast of EPIC: The Musical",
            duration: "00:05:10",
            size: "24 MB",
          },
          {
            name: "Open Arms 1",
            performers: "Saga Songs & Steven Dookie",
            duration: "00:05:10",
            size: "23 MB",
          },
          {
            name: "Warrior of the Mind 1",
            performers: "Saga Songs, Teagan Earley & Cast of EPIC: The Musical",
            duration: "00:05:10",
            size: "23 MB",
          },
        ],
      },
      {
        id: "66666",
        name: "Echoes of Time",
        artist: "Chrono Beats",
        type: "Single",
        songCount: 1,
        durationInSeconds: 210,
        sizeInBytes: "35 MB",
        releasedOn: "2024-05-12T09:00:00Z",
        songs: [
          {
            name: "The Horse and the Infant 1",
            performers: "Saga Songs, Luke Holt & Cast of EPIC: The Musical",
            duration: "00:02:15",
            size: "15 MB",
          },
          {
            name: "Just a Man 1",
            performers: "Saga Songs & Cast of EPIC: The Musical",
            duration: "00:02:30",
            size: "16 MB",
          },
          {
            name: "Full Speed Ahead 1",
            performers:
              "Saga Songs, Armando Julián, Steven Dookie & Cast of EPIC: The Musical",
            duration: "00:05:10",
            size: "24 MB",
          },
          {
            name: "Open Arms 1",
            performers: "Saga Songs & Steven Dookie",
            duration: "00:05:10",
            size: "23 MB",
          },
          {
            name: "Warrior of the Mind 1",
            performers: "Saga Songs, Teagan Earley & Cast of EPIC: The Musical",
            duration: "00:05:10",
            size: "23 MB",
          },
        ],
      },

      {
        id: "67890",
        name: "Legends Never Die",
        artist: "League of Legends",
        type: "Album",
        songCount: 10,
        durationInSeconds: 2500,
        sizeInBytes: "98 MB",
        releasedOn: "2023-06-15T10:00:00Z",
        songs: [
          {
            name: "The Horse and the Infant 1",
            performers: "Saga Songs, Luke Holt & Cast of EPIC: The Musical",
            duration: "00:02:15",
            size: "15 MB",
          },
          {
            name: "Just a Man 1",
            performers: "Saga Songs & Cast of EPIC: The Musical",
            duration: "00:02:30",
            size: "16 MB",
          },
          {
            name: "Full Speed Ahead 1",
            performers:
              "Saga Songs, Armando Julián, Steven Dookie & Cast of EPIC: The Musical",
            duration: "00:05:10",
            size: "24 MB",
          },
          {
            name: "Open Arms 1",
            performers: "Saga Songs & Steven Dookie",
            duration: "00:05:10",
            size: "23 MB",
          },
          {
            name: "Warrior of the Mind 1",
            performers: "Saga Songs, Teagan Earley & Cast of EPIC: The Musical",
            duration: "00:05:10",
            size: "23 MB",
          },
        ],
      },
      {
        id: "11111",
        name: "Horizon Symphony",
        artist: "Ethereal Beats",
        type: "Album",
        songCount: 12,
        durationInSeconds: 3200,
        sizeInBytes: "12 MB",
        releasedOn: "2025-02-20T12:00:00Z",
        songs: [
          {
            name: "The Horse and the Infant 1",
            performers: "Saga Songs, Luke Holt & Cast of EPIC: The Musical",
            duration: "00:02:15",
            size: "15 MB",
          },
          {
            name: "Just a Man 1",
            performers: "Saga Songs & Cast of EPIC: The Musical",
            duration: "00:02:30",
            size: "16 MB",
          },
          {
            name: "Full Speed Ahead 1",
            performers:
              "Saga Songs, Armando Julián, Steven Dookie & Cast of EPIC: The Musical",
            duration: "00:05:10",
            size: "24 MB",
          },
          {
            name: "Open Arms 1",
            performers: "Saga Songs & Steven Dookie",
            duration: "00:05:10",
            size: "23 MB",
          },
          {
            name: "Warrior of the Mind 1",
            performers: "Saga Songs, Teagan Earley & Cast of EPIC: The Musical",
            duration: "00:05:10",
            size: "23 MB",
          },
        ],
      },
      {
        id: "22222",
        name: "Neon Echoes",
        artist: "Cyber Nightfall",
        type: "EP",
        songCount: 6,
        durationInSeconds: 1400,
        sizeInBytes: "6 MB",
        releasedOn: "2024-07-10T18:30:00Z",
        songs: [
          {
            name: "The Horse and the Infant 1",
            performers: "Saga Songs, Luke Holt & Cast of EPIC: The Musical",
            duration: "00:02:15",
            size: "15 MB",
          },
          {
            name: "Just a Man 1",
            performers: "Saga Songs & Cast of EPIC: The Musical",
            duration: "00:02:30",
            size: "16 MB",
          },
          {
            name: "Full Speed Ahead 1",
            performers:
              "Saga Songs, Armando Julián, Steven Dookie & Cast of EPIC: The Musical",
            duration: "00:05:10",
            size: "24 MB",
          },
          {
            name: "Open Arms 1",
            performers: "Saga Songs & Steven Dookie",
            duration: "00:05:10",
            size: "23 MB",
          },
          {
            name: "Warrior of the Mind 1",
            performers: "Saga Songs, Teagan Earley & Cast of EPIC: The Musical",
            duration: "00:05:10",
            size: "23 MB",
          },
        ],
      },
      {
        id: "33333",
        name: "Synthwave Dreams",
        artist: "Retro Future",
        type: "Album",
        songCount: 14,
        durationInSeconds: 3400,
        sizeInBytes: "13 MB",
        releasedOn: "2022-11-05T16:20:00Z",
        songs: [
          {
            name: "The Horse and the Infant 1",
            performers: "Saga Songs, Luke Holt & Cast of EPIC: The Musical",
            duration: "00:02:15",
            size: "15 MB",
          },
          {
            name: "Just a Man 1",
            performers: "Saga Songs & Cast of EPIC: The Musical",
            duration: "00:02:30",
            size: "16 MB",
          },
          {
            name: "Full Speed Ahead 1",
            performers:
              "Saga Songs, Armando Julián, Steven Dookie & Cast of EPIC: The Musical",
            duration: "00:05:10",
            size: "24 MB",
          },
          {
            name: "Open Arms 1",
            performers: "Saga Songs & Steven Dookie",
            duration: "00:05:10",
            size: "23 MB",
          },
          {
            name: "Warrior of the Mind 1",
            performers: "Saga Songs, Teagan Earley & Cast of EPIC: The Musical",
            duration: "00:05:10",
            size: "23 MB",
          },
        ],
      },
      {
        id: "44444",
        name: "Celestial Harmonies",
        artist: "Orion Soundscape",
        type: "Album",
        songCount: 9,
        durationInSeconds: 2900,
        sizeInBytes: "11 MB",
        releasedOn: "2025-06-18T08:50:00Z",
        songs: [
          {
            name: "The Horse and the Infant 1",
            performers: "Saga Songs, Luke Holt & Cast of EPIC: The Musical",
            duration: "00:02:15",
            size: "15 MB",
          },
          {
            name: "Just a Man 1",
            performers: "Saga Songs & Cast of EPIC: The Musical",
            duration: "00:02:30",
            size: "16 MB",
          },
          {
            name: "Full Speed Ahead 1",
            performers:
              "Saga Songs, Armando Julián, Steven Dookie & Cast of EPIC: The Musical",
            duration: "00:05:10",
            size: "24 MB",
          },
          {
            name: "Open Arms 1",
            performers: "Saga Songs & Steven Dookie",
            duration: "00:05:10",
            size: "23 MB",
          },
          {
            name: "Warrior of the Mind 1",
            performers: "Saga Songs, Teagan Earley & Cast of EPIC: The Musical",
            duration: "00:05:10",
            size: "23 MB",
          },
        ],
      },
      {
        id: "55555",
        name: "Dark Matter",
        artist: "Void Resonance",
        type: "EP",
        songCount: 7,
        durationInSeconds: 1800,
        sizeInBytes: "7 MB",
        releasedOn: "2023-09-29T21:45:00Z",
        songs: [
          {
            name: "The Horse and the Infant 1",
            performers: "Saga Songs, Luke Holt & Cast of EPIC: The Musical",
            duration: "00:02:15",
            size: "15 MB",
          },
          {
            name: "Just a Man 1",
            performers: "Saga Songs & Cast of EPIC: The Musical",
            duration: "00:02:30",
            size: "16 MB",
          },
          {
            name: "Full Speed Ahead 1",
            performers:
              "Saga Songs, Armando Julián, Steven Dookie & Cast of EPIC: The Musical",
            duration: "00:05:10",
            size: "24 MB",
          },
          {
            name: "Open Arms 1",
            performers: "Saga Songs & Steven Dookie",
            duration: "00:05:10",
            size: "23 MB",
          },
          {
            name: "Warrior of the Mind 1",
            performers: "Saga Songs, Teagan Earley & Cast of EPIC: The Musical",
            duration: "00:05:10",
            size: "23 MB",
          },
        ],
      },
    ],
  },
];

app.get("/collections", (req, res) => {
  console.log(musicData);
  res.json(musicData);
});

app.get("/collections/:id", (req, res) => {
  const { id } = req.params;
  if (!musicData[0] || !musicData[0].collections) {
    return res.status(500).json({ error: "Music data is not available" });
  }

  const collection = musicData[0].collections.find((col) => col.id === id);

  if (!collection) {
    return res.status(404).json({ error: "Collection not found" });
  }

  res.json(collection);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
