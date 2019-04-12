BEGIN;

INSERT INTO noteful_folders (name)

VALUES
('Mammals'),
('Birds'),
('Reptiles'),
('Insects'),
('Amphibians');

INSERT INTO noteful_notes (name,content,folderId,modified)

VALUES
('Tiger', 'Large Orange Cat with Black Stripes',1,now()-'25 days'::INTERVAL),
('Lion', 'King of the Jungle',1,now()-'24 days'::INTERVAL),
('Wolf', 'Lone Wolf',1,now()-'23 days'::INTERVAL),
('Owl', 'night owl',2,now()-'22 days'::INTERVAL),
('Cardinal', 'Arizona Cardinals',2,now()-'21 days'::INTERVAL),
('Woodpecker', 'So loud',2,now()-'20 days'::INTERVAL),
('Snake', 'cobras',3,now()-'19 days'::INTERVAL),
('Dinos', 'T-Rex',3,now()-'18 days'::INTERVAL),
('Spider', '8 legs',4,now()-'17 days'::INTERVAL),
('Fly', 'short lives',4,now()-'16 days'::INTERVAL),
('Frogs', 'ribbit',5,now()-'15 days'::INTERVAL);

COMMIT;