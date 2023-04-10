---
section_type: "home"
---

{%- for section in collections[section_type] -%}
{{ section.templateContent }}
{% endfor %}
