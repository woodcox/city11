---
section_type: "about"
---

{% svg "github" %}

{%- for section in collections[section_type] -%}
{{ section.templateContent }}
{% endfor %}

{{ meta.companyName }}

{% render "partials/components/talking.php" %}
