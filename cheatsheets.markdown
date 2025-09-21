---
layout: default
title: Cheat Sheets
permalink: /cheatsheets/
---

{% include search.html %}

<!-- Count all posts and categories but exclude Menus and Exemple -->
{% assign posts = 0 %}
{% assign categories = 0 %}
{% assign sortedCategories = site.categories | sort %}
{% for category in sortedCategories %}
  {% unless category contains 'Menu' or category contains 'Exemple' %}
    {% assign categories = categories | plus: 1 %}
    {% assign posts = posts | plus: category[1].size %}
  {% endunless %}
{% endfor %}

<p>Actuellement <b>{{ posts }}</b> articles sont disponibles, répartis en <b>{{ categories }}</b> catégories</p>

<!-- Pagination controls -->
{% assign categories_per_page = 6 %}
{% assign total_pages = categories | divided_by: categories_per_page | plus: 1 %}

<div class="pagination-controls">
  <button id="prevBtn" class="page-btn">← Précédent</button>
  <span id="pageInfo" class="page-info"></span>
  <button id="nextBtn" class="page-btn">Suivant →</button>
</div>

<div id="content">
{% assign sortedCategories = site.categories | sort %}
{% for category in sortedCategories %}
  {% unless category contains 'Menu' or category contains 'Exemple'%}
    <div class="articles" data-page="{{ forloop.index0 | divided_by: categories_per_page | plus: 1 }}">
      <h2>{{ category[0] }} ({{ category[1].size }})</h2>
      <ul class="searchable-ul">
        {% assign sortedArticles = category[1] | sort: 'title' %}
        {% for post in sortedArticles %}
          <li><a href="{{ post.url | relative_url }}">{{ post.title }}</a></li>
        {% endfor %}
      </ul>
    </div>
  {% endunless %}
{% endfor %}
</div>

<p>Actuellement <b>{{ site.authors.size }}</b> auteur(s) ont contribué au développement de ce blog. Merci à tous ceux qui contribuent. Vous pouvez consulter la liste des auteurs et voir leur page via le menu ou en cliquant <a href="{{ site.baseurl }}{% link authors.markdown %}" class="">Ici</a></p>
