# Diagramme des classes - API rest Wordpress


### obtenir la liste des posts:

GET http://wordpress/**wp-json/wp/v2/posts**

Retourne une liste d'objet post.

Donnée| definition
-|-
`id`_:number_| id du post
`date `_:date_| date du post
`modified`_:date_| date modification
`guid.rendered `_:string_| adresse du post ("http://...")
`slug`_:string_ | identifiant unique, correspond au titre formater
`title.rendered `_:string_|titre du post
`content.rendered`_:string_| contenu du post (en html)
`excerpt.rendered`_:string_| extrait du contenu(en html)
`author`_:number_| id de l'auteur du post
`_links` | objet

Le dernier élément est `_links` qui est un objet contenant des liens vers d'autre objets qui sont lier au post.
Voici le détail de l'objet `_links`:

```json
"_links": {
      "author": [
        {
          "href": "http://wordpress/wp-json/wp/v2/users/1"
        }
      ],
      "replies": [
        {
          "href": "http://wordpress/wp-json/wp/v2/comments?post=68"
        }
      ],
      "wp:featuredmedia": [
        {
          "href": "http://wordpress/wp-json/wp/v2/media/31"
        }
      ],
      "wp:attachment": [
        {
          "href": "http://wordpress/wp-json/wp/v2/media?parent=68"
        }
      ],
      "wp:term": [
        {
          "taxonomy": "category",
          "href": "http://wordpress/wp-json/wp/v2/categories?post=68"
        },
        {
          "taxonomy": "post_tag",
          "href": "http://wordpress/wp-json/wp/v2/tags?post=68"
        }
      ],
		
```

Chacun de ses lien est un fichier JSON. voici les détail de chacun des fichiers:

**`author` :**

http://wordpress/**wp-json/wp/v2/users**

Donnée| definition
-|-
`id`_:number_| id de l'utilisateur
`name`_:string_ | nom de l'utilisateur
`url`_:string_ | url du site personel de l'utilisateur
`description`_:string_ | texte de présentation de l'utilisateur
`link`_:string_ | lien vers le profil sur le site
`slug`_:string_ | nom d'utilisateur formaté
`avatar_urls`| contient trois clé, (`avatar_urls.24`,`avatar_urls.48`,`avatar_urls.96`) pour les différente taille d'image

**`replies` :**

http://wordpress/**wp-json/wp/v2/comments**

Contient une liste de tout les commentaire rataché au post. Voici le détail de chaque commentaire:

Donnée| definition
-|-
`id`_:number_ | id du comentaire
`post`_:number_ | id du post auquel est rataché le comentaire
`parent`_:number_| id du commentaire parent. Si l'id est 0 le commantaire n'as pas de parent
`author`_:number_| id de l'auteur
`author_name`_:string_|nom de l'auteur
`date`_:date_| date du commentaire
`content.rendered`_:string_| contenu du commentaire
`link`_:string_| lien vers le commentaire
`status`_:string_| status du commentaire
`author_avatar_urls`| contient trois clé, (`author_avatar_urls.24`,`author_avatar_urls.48`,`author_avatar_urls.96`) pour les différente taille d'image de l'avatar de l'auteur.
`_links`| contient les clé `author`,`up`, et `in-reply-to` qui contienne chacune une clé `href` qui est le lien vers les JSON de, respectivement, l'auteur, le post et le commentaire parent

**`wp:featuredmedia` et `wp:attachment` :**

http://wordpress/**wp-json/wp/v2/media**

Il pointe tout les deux vers un média qui ont la même structure:

Donnée| definition
-|-
`id`_:number_| id du média
`date `_:date_| date d'ajout du média
`modified`_:date_| date modification du média
`guid.rendered `_:string_| adresse du média ("http://...")
`slug`_:string_ | identifiant unique, correspond au titre formater
`title.rendered `_:string_|titre du média
`alt_text`_:string_| texte alternatif
`media_type`_:string_| type de média
`media_mime`_:string_| type de mime
`media_details` | objet contenant tout les détail du media, voir plus bas
`post`_:number_ | id du post auquel est ratacher le média. La valeur est `null`si le média n'est pas lié à un post
`author`_:number_| id de l'auteur du média
`_links` | objet qui contient les liens vers `author` et `replies` si attaché à un post

Voici les détail de l'objet `media_details` :

```json
"media_details": {
      "width": 1536,
      "height": 864,
      "file": "2019/06/01-2004_25_1.jpg",
      "sizes": {
        "thumbnail": {
          "file": "01-2004_25_1-150x150.jpg",
          "width": 150,
          "height": 150,
          "mime_type": "image/jpeg",
          "source_url": "http://wordpress/wp-content/uploads/2019/06/01-2004_25_1-150x150.jpg"
        },
        "medium": {
          "file": "01-2004_25_1-300x169.jpg",
          "width": 300,
          "height": 169,
          "mime_type": "image/jpeg",
          "source_url": "http://wordpress/wp-content/uploads/2019/06/01-2004_25_1-300x169.jpg"
        },
        "medium_large": {
          "file": "01-2004_25_1-768x432.jpg",
          "width": 768,
          "height": 432,
          "mime_type": "image/jpeg",
          "source_url": "http://wordpress/wp-content/uploads/2019/06/01-2004_25_1-768x432.jpg"
        },
        "large": {
          "file": "01-2004_25_1-1024x576.jpg",
          "width": 1024,
          "height": 576,
          "mime_type": "image/jpeg",
          "source_url": "http://wordpress/wp-content/uploads/2019/06/01-2004_25_1-1024x576.jpg"
        },
        "full": {
          "file": "01-2004_25_1.jpg",
          "width": 1536,
          "height": 864,
          "mime_type": "image/jpeg",
          "source_url": "http://wordpress/wp-content/uploads/2019/06/01-2004_25_1.jpg"
        }
        }
}
```

**`wp:term` :**

`wp:term` se divise en deux partie, les catégories et les tags.

`categories`: 

http://wordpress/**wp-json/wp/v2/categories**

Donnée| definition
-|-
`id`_:number_| id de la catégorie
`count`_:number_ | nombre de posts qui utilise cette catégorie
`description`_:string_| description de la catégorie
`link`_:string_ | lien vers la catégorie
`name`_:string_| nom de la catégorie
`slug`_:string_| nom de la catégorie formaté
`taxonomy`_:string_| la "sous classe" de `wp:term`
`parent`_:number_ | id de la catégorie parente, vaut 0 si pas de parent

`tags`:

http://wordpress/**wp-json/wp/v2/tags**

Donnée| definition
-|-
`id`_:number_| id du tag
`count`_:number_ | nombre de posts qui utilise ce tag
`description`_:string_| description du tag
`link`_:string_ | lien vers le tag (dans le visuel, le tag est sous le nom d'une étiquette)
`name`_:string_| nom du tag
`slug`_:string_| nom du tag formaté
`taxonomy`_:string_| la "sous classe" de `wp:term`