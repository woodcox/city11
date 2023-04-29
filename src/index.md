---
section_type: "home"
tags: home
---

{%- for section in collections[section_type] -%}
{{ section.templateContent }}
{% endfor %}
