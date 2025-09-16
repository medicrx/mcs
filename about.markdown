---
layout: default
title: A propos
permalink: /about/
---

# A propos

Ce site/blog est alimenté par {% glossary Jekyll %} et {% glossary Github %} et utilise le thème Cayman. Les liens pour en apprendre plus sur ces technologies sont en pied de page.
Pour contribuer vous devez **ABSOLUMENT lire tout ce qui suit**, surtout si c'est votre toute première contribution. La documentation aborde les aspects techniques et le paragraphe "contribution"
les étapes à suivre pour faire une contribution à ce blog.

## Qui peut contribuer ?

Réponse courte: Tout le monde (toi aussi)

Réponse longue:

- Les Médecins, étudiants en Médecine, ou tout autre professionnel de la santé qui a une certaine base en pathologie (C'est la contribution la plus importante et la plus prisée. Si vous etes dans cette catégorie vous me facilitez la tâche de faire des articles.)
- Les développeurs qui ont une certaine expérience du domaine de la santé (si vous savez coder c'est un gros plus)
- Les scientifiques qui ont une certaine expérience en pathologie
- Les auteurs (web et autres media) qui ont une certaine expérience du domaine de la santé
- Les autres...( c'est vague hein ? ) Je veux parler de tous ceux qui ont envie de participer (pas forcément à l'écriture d'article)

Après au moins une contribution vous serez ajouté à la liste des contributeurs (disponible après au moins une contribution). Si vous avez écrit un article
Vous rejoignez plutôt la liste des auteurs du site. Les administrateurs et modérateurs du site seront choisis parmi les auteurs volontaires les plus distingués et
les plus motivés.

## Documentation

Cette partie concerne surtout les "pros", en gros toute personne qui s'y connaît en développement informatique/web. Le dépôt {% glossary Github %} du code source est public et open source sous license (à ajouter). Pour contribuer faites simplement un fork ou clonez le dépôt et créez une branche pour vos modifications. Ajoutez vos articles au format markdown en respectant la nomenclature et le format des posts Jekyll, dans le dossier `_drafts` et rangez l'article dans la catégorie `_posts` correspondante (si vous connaissez la bonne catégorie ou ranger le fichier, aka spécialité médicale correspondante). la modération arrangera ça lors du code review et fera un merge si tout est correct.

Si vous clonez localement n'oubliez pas d'installer les dépendances avec `bundle install` et de lancer `bundle exec jekyll serve` pour démarrer le serveur de développement.
Consultez la documentation de jekyll (lien en bas de page) pour plus d'informations.

Inspirez vous de [l'exemple d'article]({{ site.baseurl }}{% link _posts/2021-09-09-Exemple.markdown %}) pour remplir l'en-tête et rédiger votre article.

Créez une branche et Faites ensuite vos pull-requests en utilisant un nom clair et simple comme 'add-exemple-to-Examples'.
Un commit par pull-request (squash commits), et une seule Pull request (PR) par article ajouté.

Si c'est votre premier article dans la meme PR modifiez le fichier `authors.yml` dans le dossier
`_data` et ajoutez vos informations au souhait, mais le nom (pseudo) et le numéro (tel) ou au moins un contact sont obligatoires.

Pour toute autre forme de contribution ou suggestion ouvrez une issue et on en discute. vous pouvez également faire une PR directement mais pour chaque modification une seule PR. par exemple ne modifiez pas plusieurs fichiers en une seule PR. Si par exemple vous souhaiter changer l'apparence du site via le layout default, modifiez uniquement ce fichier (et éventuellement le fichier scss associé) dans votre PR.

## Contribution

Pour tout le monde à présent, comment contribuer? D'abord le plus simple. pour toute suggestion pour modifier par exemple l'apparence du site, ajouter ou retirer une fonctionnalité, corriger une erreur ou améliorer le contenu d'un article, veuillez simplement contacter l'auteur principal du site (moi), via les
liens (icônes) en bas de cette page, ou l'auteur de l'article concerné s'il s'agit d'une erreur dans un article. Actuellement par exemple si le nom du site (Medical cheat sheets) ne vous plait pas...
le truc idéal c'est d'en suggérer un nouveau. Votre proposition pourrait être acceptée et vous auriez contribué en donnant un meilleur nom ou logo au site.

Si vous voulez écrire un article, le format de fichier préféré est le {% glossary Markdown %} style github (GFM). vous pouvez cliquer sur ce lien pour lire la documentation de Github sur ce format de texte simple:

[markdown GFM](https://guides.github.com/features/mastering-markdown/)

une certaine maîtrise du Html/Css est un plus...Cependant si vous souhaitez juste écrire sans vous
tracasser à apprendre tout ça vous pouvez uploader le format de texte de votre choix (doc,txt,xml,pdf...)
Cependant notez que je modifierai le format de votre article pour qu'il corresponde au format markdown du site (sans forcément toucher au contenu). Le site cherche à être le plus simple possible alors les articles aussi doivent être faciles à lire et concis. peu de discours...privilégier les listes, schémas, images, ordinogrammes avec légendes...Utiliser un Titre principal et des sous-titres..etc

Vous pouvez ici voir un exemple d'article détaillé avec le markdown correspondant:

[Exemple]({{ site.baseurl }}{% post_url 2021-09-09-Exemple %})

Si c'est votre premier article il faudra ajouter dans l'article vos informations d'auteur, notamment votre nom, contacts, liens ou identifiants de réseaux sociaux, au choix bien entendu (vous pouvez rester anonyme en
utilisant juste un pseudo et un numéro de téléphone. voir l'exemple pour plus de détails)

Pensez avant tout à vérifier que votre article n'existe pas déjà (j'en ai personnellement écrit pas mal). La médecine est un vaste champ et il existe des milliers de pathologies. Nous perdrions du temps à nous répéter et il y a beaucoup à dire. Vous pouvez par contre suggérer des modifications qui si elles sont pertinentes seront intégrées sans hésiter. Un auteur peut léguer un article à un autre s'il le désire. En gros si vous réécrivez mieux que moi un article vous en devenez sans hésiter (avec mon accord) le nouvel auteur et votre article remplace le mien.

Le plus important à retenir c'est que **Deux articles ne peuvent avoir le meme nom**

Donc utilisez l'outil de recherche sur la page des articles pour filtrer et assurez vous que votre article n'existe pas déjà. Sinon vous devrez contacter l'auteur pour négocier une réécriture.

Lorsque vous avez fini de rédiger votre article, vous devez l'uploader dans le dossier MedicalCheatSheets
sur Google Drive (il vous faut donc un compte Google). Il y a au bas de cette page un lien pour uploader directement dans ce dossier.

Utilisez le uniquement si vous avez fini de rédiger votre article et souhaitez l'ajouter.

Si vous avez des fichiers (images ou liens que vous n'arrivez pas à mettre dans l'article)
référencez leur noms de fichier dans l'article à l'endroit ou vous désirez les insérer et
archivez l'ensemble dans un dossier au format zip ou rar, puis faites un upload de l'archive.

En gros vos pouvez uploader un seul fichier ou une archive contenant plusieurs fichiers (comme vous voulez)

Notez cependant qu'il existe une limite de taille aux fichiers. il est préférable d'utiliser une archive zip ou rar. Uploader un dossier ou un fichier uniquement reste possible.

Dans tous les cas remplissez correctement l'en-tete du fichier article pour qu'on puisse facilement l'identifier et l'associer à un auteur.

Je ferai un tour chaque semaine pour vérifier la disponibilité de nouvelles contributions. votre
article sera donc évalué, modifié au besoin et inséré quelques jours après sa mise en ligne.

Vous etes l'ultime propriétaire de votre article et en êtes le premier responsable, donc vous avez
le droit de réclamer des modifications à tout moment ou ré-uploader vous meme une version différente,
mise à jour, ou supprimer (s'il le faut vraiment) votre article.

Merci pour votre contribution.

<div align=center style="margin-top:5%;">
<a href="https://drive.google.com/drive/folders/1M2ulawlY_FKUrq68LsoJ37XHmAnZYdjg?usp=sharing" class="contribute"> Ajouter un fichier</a>
</div>
