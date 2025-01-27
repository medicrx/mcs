---
layout: default
title: Traumatologie
author: nairolf32
date: 2021-11-26 14:40:00 +0100
categories: Menu
permalink: /traumatologie/
---

{% assign category = page.title %}

<h2>{{ category }}</h2>

> Au sujet des traumatismes et des lésions corporelles

{% for post in site.posts %}
{% if post.categories contains category %}
<li> <a href="{{ site.baseurl }}{{ post.url }}">{{ post.title }}</a> </li>
{% endif %}
{% endfor %}
