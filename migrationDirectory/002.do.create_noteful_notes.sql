CREATE TABLE noteful_notes (
  id INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
  name TEXT NOT NULL,
  content TEXT NOT NULL,
  folderId INTEGER REFERENCES noteful_folders(id) on DELETE CASCADE NOT NULL
  modified TIMESTAMP NOT NULL DEFAULT now(),
);