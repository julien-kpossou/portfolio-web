PORTFOLIO PERSONNEL — YÉMALIN JULIEN KPOSSOU
Projet final — Cours Développement Web (Semaine 6)
=====================================================

1. PRÉSENTATION
----------------
Portfolio personnel réalisé en Single Page Application (SPA) : une seule
page (index.html) contenant toutes les sections (Accueil, À propos,
Compétences, Projets, Contact), avec navigation par ancres.

2. STRUCTURE DU PROJET
------------------------
KPOSSOU_Julien_ProjetFinal_Semaine6/
├── wireframe/
│   ├── prompts/            (prompts Stitch v1 et v2)
│   └── exports_stitch/     (exports desktop et mobile)
├── figma/
│   ├── frame_accueil_desktop.png
│   ├── frame_accueil_mobile.png
│   ├── interaction_menu_mobile.png
│   ├── interaction_confirmation_envoi.png
│   ├── interaction_cv_indisponible.png
│   └── interactions.txt    (liste des ≥6 interactions du prototype)
├── site/
│   ├── index.html
│   ├── css/style.css
│   ├── css/responsive.css
│   ├── js/script.js
│   └── assets/images/ , assets/cv/  (à compléter : voir section 3)
└── README.txt (ce fichier)

3. À COMPLÉTER AVANT REMISE
------------------------------
Déposer dans site/assets/images/ :
  - profil.png              (photo de Julien)
  - dev-illustration.png    (illustration du hero)
  - project-leprofjulien.png, project-github.png,
    project-python.png, project-recherche.png

Déposer dans site/assets/cv/ :
  - CV.pdf (tant qu'il est absent, le bouton affiche une modale
    "CV disponible prochainement" au lieu d'une erreur)

4. QUALITÉ — RÉSUMÉ
----------------------

1) Accessibilité (a11y)
   - Problème : navigation incohérente entre desktop (5 liens) et mobile
     (6 liens, libellés différents).
   Correction : harmonisation à 5 liens identiques partout (Accueil, À
     propos, Compétences, Projets, Contact).
   Résultat : navigation prévisible sur tous les écrans.

   - Problème : absence de lien d'évitement et de retour visuel clavier.
   Correction : ajout d'un "skip link", de styles :focus-visible sur tous
     les éléments interactifs, et de la gestion de la touche Échap pour
     fermer le menu mobile et les modales.
   Résultat : navigation clavier complète, sans piège au focus.

   - Problème : structure HTML à vérifier (hiérarchie des titres, landmarks).
   Correction : un seul <h1> par page, hiérarchie <h2> par section,
     balises sémantiques <header>, <nav>, <main>, <section>, <footer>,
     labels <label for=""> associés à chaque champ du formulaire.
   Résultat : structure conforme aux exigences a11y de base du projet.

2) Performance
   - Problème : tout le CSS/JS était regroupé dans un seul fichier HTML.
   Correction : séparation en trois fichiers distincts (style.css,
     responsive.css, script.js), chargés en <link> et <script defer>.
   Résultat : code plus léger à charger, mise en cache plus efficace,
     meilleure lisibilité et maintenabilité.

   - Problème : risque d'alourdir la page avec des icônes en images.
   Correction : toutes les icônes sont en SVG inline (pas de requêtes
     réseau supplémentaires, pas de librairie d'icônes externe).
   Résultat : aucune requête HTTP superflue pour les icônes, poids réduit.

   - Problème : aucune police ni librairie externe nécessaire.
   Correction : utilisation de la pile de polices système
     (-apple-system, Segoe UI, Roboto...), aucun appel à une police
     Google Fonts ou à une librairie JS externe.
   Résultat : zéro requête tierce, chargement plus rapide, démarche
     d'écoconception respectée.

3) Corrections / robustesse
   - Problème : informations incohérentes entre les versions (email
     placeholder générique, localisation "Paris, France", projets
     fictifs "Platforme e-santé"/"Fintech Dashboard", niveau d'anglais
     contradictoire selon les versions).
   Correction : uniformisation de toutes les informations réelles
     (email julienkpossou57@gmail.com, Abomey-Calavi/Bénin, les 4 vrais
     projets, anglais = Débutant) sur l'ensemble des fichiers.
   Résultat : contenu cohérent partout, aucune trace de contenu générique.

   - Problème : plusieurs coquilles dans les textes ("HTLJ" au lieu de
     HTML5, "Collboration" au lieu de Collaboration, "Et entant que" au
     lieu de "En tant que", "j'utlise" au lieu de "j'utilise").
   Correction : relecture et correction orthographique de tous les textes.
   Résultat : contenu professionnel, sans faute.

   - Problème : le formulaire de contact n'avait pas de validation.
   Correction : validation JavaScript complète (nom ≥2 caractères, email
     au bon format, sujet ≥3 caractères, message ≥10 caractères), avec
     messages d'erreur explicites sous chaque champ et modale de
     confirmation après envoi valide.
   Résultat : formulaire robuste, cas invalides gérés, retour utilisateur
     clair.

   - Problème : bouton "Télécharger CV" pouvait provoquer une erreur si
     le fichier n'existait pas encore.
   Correction : vérification de la présence du fichier avant
     téléchargement (fetch HEAD), avec modale d'information si absent.
   Résultat : aucune erreur brute pour l'utilisateur, expérience propre
     dans tous les cas.

À FAIRE PAR L'ÉTUDIANT AVANT REMISE FINALE (tests manuels) :
   - Vérifier dans la Console du navigateur (F12) qu'il n'y a aucune
     erreur après ajout des vraies images/CV.
   - Tester le rendu sur au moins 2 navigateurs.
   - Tester le responsive à 360×640, 768×1024 et en desktop.
   - Vérifier le poids de la page et le nombre de requêtes (onglet
     Network des DevTools) après ajout des images définitives.

5. CONTACT
------------
Yémalin Julien KPOSSOU
julienkpossou57@gmail.com
https://facebook.com/LeProfJulien
https://julien-kpossou.github.io
https://www.linkedin.com/in/julien-kpossou
Abomey-Calavi, Bénin
