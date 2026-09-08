# Cours 3 – Mise en poste : branchements et réseaux

## Ordre du jour

- [Rappel — Réservation de matériel et de local](#rappel-reservation-de-materiel-et-de-local)
- [Données et préfixes de mémoire](#donnees-et-prefixes-de-memoire)
- [Les logiciels d'un ordinateur](#les-logiciels-dun-ordinateur)
- [Les formats de fichiers](#les-formats-de-fichiers)
- [Formatage de disques durs](#formatage-de-disques-durs)
- [Installation de périphériques Bluetooth](#installation-de-peripheriques-bluetooth)
- [Mise à jour de pilotes](#mise-a-jour-des-pilotes)
- [Les branches de l'informatique](#les-branches-de-linformatique)
- [Introduction à la programmation](#introduction-a-la-programmation)
- [Atelier Scratch](#atelier-scratch)

## Rappel — Réservation de matériel et de local

Un rappel rapide de la procédure de réservation de local et de matériel auprès des TTP.

## Données et préfixes de mémoire

De manière générale, une donnée correspond à une information factuelle (fait) ou une mesure. En informatique, cette information peut prendre plusieurs formes (chiffres, textes, sons ou images) traduites en courant électrique et sauvegardées dans la mémoire sous forme de **bits** (0 ou 1).

Un bit seul ne contient pas beaucoup d'information. On les assemble donc généralement en série de 8, qu'on appelle un **octet** (8 bits = 1 octet, *bits and bytes* en anglais). La capacité d'une composante de mémoire — comme la RAM ou les disques vus plus haut — se calcule en nombre d'octets.

Puisque la quantité de mémoire nécessaire ne cesse d'augmenter, on utilise des préfixes métriques pour garder un suivi précis :

- **Kilo-octet** : 1 000 octets (mille)
- **Méga-octet** : 1 000 000 octets (million)
- **Giga-octet** : 1 000 000 000 octets (milliard)
- **Téra-octet** : 1 000 000 000 000 octets (trillion)

## Les logiciels d'un ordinateur

Pour qu'un ordinateur fonctionne, il a besoin de logiciels. Ces programmes envoient des instructions aux composantes pour exécuter des opérations. Trois grandes catégories :

- **Système d'exploitation** : gère les composantes, les processus, les fichiers et l'interaction avec l'utilisateur via une interface. Les plus connus : Windows, MacOS, Linux, Android, iOS.
- **Pilotes** : petits programmes qui permettent au système d'exploitation de communiquer avec un périphérique matériel. Chaque pièce physique a besoin de son pilote.
- **Applications** : programmes utilisés pour accomplir des tâches précises, exécutés « sur » le système d'exploitation (traitement de texte, traitement d'images, navigateur web, jeux vidéo, logiciels de programmation, moteurs de jeux, logiciels de montage, etc.)

## Les formats de fichiers

Un format de fichier représente la façon dont l'information est structurée et/ou encodée pour le stockage. Il communique au logiciel les procédures d'encodage/décodage nécessaires.

### Textes et documents

- **.txt** : texte brut, universellement reconnu
- **.doc/.docx** : texte avec mise en forme (Microsoft Word)
- **.pdf** : format propriétaire d'Adobe, conserve les fonctionnalités entre plateformes
- **.csv** : données en tableau (Excel)

### Images

- **.jpg** : compressé, petit fichier, perte de qualité
- **.gif** : couleurs limitées, permet l'animation, volumineux
- **.tif** : meilleure qualité, très volumineux
- **.png** : qualité moyenne à bonne, permet la transparence
- **.webp** : format récent (Google), petit et transparent

### Audio, vidéo, web

- **.mp3** : compressé, perte de qualité — **.wav** : meilleure qualité, volumineux — **.flac** : qualité moyenne
- **.mp4** : conteneur multimédia (vidéo, audio, sous-titres)
- **.html / .css / .js** : structure, style et interactivité web
- **.md** : Markdown (balisage simplifié) — **.json** : notation d'objets (clé/valeur)

### Zip et archives

Un fichier ou dossier archivé est compressé pour prendre moins d'espace (idéal pour les transferts).

- Formats courants : .zip, .rar, .7z, .iso
- Extraire : clic droit → Extraire
- Compresser : sélectionner les fichiers → clic droit → Compresser

### Démonstration 

- Classer des fichiers de votre poste par format
- Les mettre dans une archive et la remettre sur Teams

## Formatage de disques durs

Il est possible de travailler sur le disque interne, mais pour circuler entre plusieurs ordinateurs, un disque externe (idéalement SSD) est préférable. Certains logiciels (After Effects, DaVinci) exigent un format précis — mal formaté, vous risquez de perdre vos projets.

- **Mac** : Mac OS étendu journalisé
- **PC** : exFAT ou NTFS (exFAT recommandé, lisible aussi sur Mac)
- **Clé USB** : exFAT pour plus de 4 Go, FAT32 pour moins de 4 Go
- Ne jamais travailler directement sur une clé USB — toujours garder une sauvegarde (ex. OneDrive)

### Formater et partitionner

Formater prépare un disque à être utilisé par le système d'exploitation. Une partition est une division du disque, réservée au système ou au stockage.

- Formats les plus connus : exFAT, FAT32, NTFS, Mac OS étendu journalisé
- **NTFS** : idéal pour un disque uniquement Windows
- **Mac OS étendu journalisé** : idéal pour un disque uniquement Mac
- **exFAT** : disques de plus de 4 Go, multiplateforme
- **FAT32** : disques de moins de 4 Go, multiplateforme

### Comment formater?

Pour un formatage rapide dans windows, il suffit de se rendre sur le disque dur de son choix à partir de Ce Pc, de cliquer sur le bouton droit de la souris, puis de choisir formater. De là, un wizard apparaît et on peut choisir le format ainsi que le volume de nos partitions.  

Pour une vue détaillée, on peut aller dans le gestionnaire de disques, néanmoins ce menu n’est pas accessible avec les ordinateurs de l’école.  

Pour le montrer, nous allons faire une [petite démonstration](https://www.youtube.com/watch?v=g4yr_jI9NTs)

## Installation de périphériques Bluetooth

Certains périphériques doivent être ajoutés manuellement via le menu Bluetooth et autres paramètres du système. Il suffit de mettre l'appareil en mode découvrable, puis de l'ajouter et de le mettre en pair.

## Mise à jour des pilotes

La plupart des périphériques sont détectés et installés automatiquement par Windows, mais certains (comme les cartes graphiques) nécessitent une mise à jour manuelle plus fréquente.

- Identifier le modèle dans le gestionnaire de périphériques
- Se rendre sur le site du fabricant, télécharger le pilote pour le modèle
- Lancer l'installation
- Une fois le logiciel de la carte graphique installé (GeForce Experience, AMD Software), la mise à jour peut se faire directement de là

## Les branches de l'informatique

Dans le monde professionnel, l'informatique s'étend sur de nombreuses branches. Chacune d'entre elles représente un domaine en soi et donc de nombreuses possibilités de carrière pour vous.

D'après vous, quelles sont ces branches? Réfléchissez-y individuellement, puis en équipe de deux, avant un retour en grand groupe.

- **Technicien** : dépannage et gestion du matériel
- **La programmation** : création d'algorithmes et de logiciels (ex. : applications, jeux, scripts)
- **Réseaux et télécommunication** : gestion de serveurs, branchement et communication
- **Cybersécurité** : protection des données, des systèmes et des communications
- **Base de données** : stockage, organisation et gestion de données
- **Électromécanique** : automatisation et intégration informatique (voitures, télévision, etc.)
- **Intelligence artificielle** : conception d'apprentissage machine et réseaux neuronaux
- **Informatique quantique** : développement informatique par physique quantique

## Introduction à la programmation

La programmation est sans doute un des plus grands aspects de l'informatique. Certains diront que ceux qui ne savent pas programmer seront les illettrés du monde de demain, d'autres diront que la programmation sera inutile puisque l'IA le fera à notre place.

Quoi qu'il en soit, il sera pertinent pour nous aujourd'hui de survoler les concepts de base.

Pour aller au plus simple, on pourrait dire que la programmation c'est de parler le langage de la machine pour communiquer et exécuter des instructions. Ainsi, c'est un langage entre l'humain et la machine qui permet de donner vie aux applications, jeux vidéo, sites web et autres logiciels.

### Les principaux langages

Quels langages connaissez-vous et à quoi servent-ils principalement? Réfléchissez-y individuellement, puis en équipe de deux, avant un retour en grand groupe.

Bien qu'il existe des milliers de langages, certains sont universellement reconnus et utilisés :

- **Python** : utilisation générale, IA et data science
- **JavaScript** : très populaire, principalement pour faire du web
- **HTML/CSS** : structure et design de sites web
- **C** : langage machine avec peu de niveau d'abstraction, principalement utilisé pour les systèmes d'exploitation et l'électronique
- **C++ / C#** : langage près de la machine, mais avec un niveau d'abstraction plus élevé, principalement utilisé pour les applications exigeantes comme les jeux vidéo
- **PHP** : opérations de serveur, surtout utilisé en web
- **SQL** : gestion de base de données

### Certains concepts de base en programmation

- **Algorithmes** : suite logique d'instructions pour résoudre un problème
- **Variables** : conteneurs d'information (textes, chiffres, etc.)
- **Conditions** : décisions à prendre selon une situation (si... alors)
- **Boucles** : répétitions d'actions (tant que, pour chaque)
- **Fonctions** : blocs de code réutilisables
- **Événements** : interactions déclenchées par l'utilisateur (clic, mouvement, etc.)

## Atelier Scratch

Nous allons maintenant mettre les notions d'aujourd'hui en pratique avec une petite interface de programmation simple : Scratch.

Scratch est un environnement développé par le MIT qui permet de programmer des animations et des jeux par le moyen d'une interface simple. C'est l'environnement idéal pour découvrir les notions de programmation de base.

Nous allons donc nous rendre sur le site web et construire un petit jeu où il faut ramasser des objets pour augmenter son score. Ce petit exercice nous permettra de mettre en pratique les notions d'évènements, boucles, conditions et variables.

### Exercice

Allez dans l'équipe Teams du cours et téléchargez le fichier « Exercice cours 2 ». Répondez aux questions puis sauvegardez le fichier. Remettez ensuite votre fichier dans l'espace de remise.

## Préparation pour la semaine prochaine

Le mandat client 1 (Web) débute la semaine prochaine. Créez-vous un compte GitHub si ce n'est pas déjà fait.

## Merci et à la semaine prochaine!

Commentaires ou questions?
