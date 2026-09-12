export const ARTICLE_CONTENT = {
  "my-portfolio": `
    <p>I created this portfolio project to showcase my skills as a web developer and to have a platform where I can share my work, projects, and the knowledge I've gained so far. It was also an important opportunity to demonstrate what I've learned throughout my journey.</p>
    <p>For this project, I used several key technologies. Django served as the foundation, allowing me to build a structured and maintainable web application. I used Django Templates for creating pages and its template inheritance system to streamline HTML code management.</p>
    <p>In the following sections, I'll highlight the key takeaways from this project, what I learned during development, and how I utilized different technologies and best practices to improve accessibility and optimize the site.</p>
    <p>For me, this portfolio project was my first real project with Django. Although I had experimented with the framework before, this was the first time I applied it to a full-scale, production-like project. Django helped me build a well-structured, scalable, and maintainable web application that I could be proud of.</p>
    <p>One of the first things I learned was the importance of Django's built-in features, such as the admin panel, models, and views. Using models allowed me to structure the data for each of my projects and blog posts efficiently. The slug field, in particular, made managing URLs incredibly simple. By generating a unique slug for each article, I was able to create clean and SEO-friendly URLs for each project. The Django admin panel made it easy to manage and update content, saving me a lot of time and effort. With these tools, I could easily store, retrieve, and display information about my projects and blog posts. Here's the code for the model that helped me achieve this:</p>
    <pre id="code_model"><code>    <span class="yellow_code">class </span><span class="blue_code">Project</span><span class="red_code">(</span>models.Model<span class="red_code">)</span>:
        title <span class="red_code">=</span> models.CharField<span class="red_code">(</span>max_length<span class="red_code">=</span>200<span class="red_code">)</span>
        slug <span class="red_code">=</span> models.SlugField<span class="red_code">(</span>unique<span class="red_code">=</span>True, blank<span class="red_code">=</span>True<span class="red_code">)</span>
        date <span class="red_code">=</span> models.DateTimeField<span class="red_code">(</span>auto_now_add<span class="red_code">=</span>True<span class="red_code">)</span>
        template_name <span class="red_code">=</span> models.CharField<span class="red_code">(</span>
            max_length<span class="red_code">=</span>100,
            help_text<span class="red_code">=</span><span class="green_code">"Template name (without .html)"</span>
        <span class="red_code">)</span>
</code></pre>
    <p>This Django model, <code><span class="blue_code">Project</span></code>, defines the structure for storing project-related data.
        The <code><strong>title</strong></code> field holds the project name, while <code><strong>slug</strong></code> generates a unique identifier for clean URLs.
        The <code><strong>date</strong></code> field automatically records when a project is created,
        and <code><strong>template_name</strong></code> specifies the associated template without the <code><span class="green_code">".html"</span></code> extension.
        This model helps efficiently manage projects within a Django application.</p>
    <p>In this project, I also learned how to organize and structure my Django application efficiently. The concept of views, URL routing, and templates was crucial in creating a seamless user experience. I used Django Templates extensively to separate logic from presentation and keep my code clean and reusable. The template inheritance system was incredibly useful, as it allowed me to define a base template and extend it in different parts of my site, ensuring consistency across pages.</p>
    <p>For example, I created a base template with common elements like the header, footer, and navigation, and then extended it in other templates to add unique content to each page. Here's a small snippet of how I used Django Templates:</p>
    <pre id="code_inheritance"><code>    {% extends 'base.html' %}

    {% block content %}
        My portfolio content goes here
    {% endblock %}
</code></pre>
    <p>This approach allowed me to keep my HTML organized and avoid repetition, which made it easier to maintain and update my website.</p>
    <p>Additionally, I got to grips with Django's powerful template language. Using template tags like <code>{% if %}</code>, <code>{% for %}</code>, and <code>{{ variable }}</code> allowed me to dynamically render content based on the data I passed to the templates from my views.</p>
    <p>I integrated email functionality into my project using Django's built-in email backend. By configuring the settings to work with Gmail's SMTP server, I was able to easily send emails from my application. This feature allowed me to handle notifications and communication directly within the site, providing a more seamless experience for users.</p>
    <p>Additionally, I implemented internationalization by translating the content of my site into four languages. Using Django's translation tools, I was able to offer a multilingual experience, making the site accessible to a wider audience.</p>
    <p>Throughout this project, my skills in CSS, HTML, and JavaScript significantly improved. I had never built such a large and visually demanding website before, so it pushed me to dive deeper into front-end technologies. As I worked on designing and implementing complex layouts and interactive elements, I became more confident in creating responsive, dynamic user interfaces that were both functional and visually appealing.</p>
    <p>In conclusion, using Django in my first real project not only helped me develop my technical skills but also taught me how to structure and scale a web application effectively. Django's flexibility and built-in tools made it easier to focus on the core functionality of my portfolio while ensuring it was well-organized and maintainable.</p>
  `,

  "viatel-automation-tool": `
    <p>This project allowed me to improve my skills in Python, particularly in developing graphical user interfaces <strong>(GUIs)</strong> and automating tasks. By creating the <strong>Policiamentos - Viatel Automation Tool</strong>, I was able to optimize the process of submitting service requests to the police and logging the details of these requests efficiently. The tool not only automates the creation of emails for service requests but also ensures that all relevant information is saved in a <strong>CSV</strong> file for future reference. This experience allowed me to better understand the power of Python libraries like <strong>tkinter</strong>, <strong>tkcalendar</strong>, and <strong>webbrowser</strong> for automating repetitive tasks in the workplace.</p>
    <p>One of the main lessons from this project was using a graphical user interface <strong>(GUI)</strong> to facilitate data entry. The <strong>GUI</strong>, built with <strong>tkinter</strong>, allows users to easily input details like region, police division, date, time, and street of the request. This simple yet effective interface significantly reduces manual entry errors and the time required to generate the service request emails. Below is how the main window of the application is configured:</p>
    <pre id="code_tkinter"><code>root <span class="green_code">=</span> tk.Tk()
root.title(<span class="blue_code">"Policiamentos - Viatel"</span>)
root.geometry(<span class="blue_code">"450x400"</span>)
root.configure(bg<span class="green_code">=</span><span class="blue_code">"#008AC8"</span>)
root.iconbitmap(<span class="blue_code">"media/viatel_logo.ico"</span>)</code></pre>
    <p>The <strong>save_to_csv()</strong> function plays a key role in storing the request details in a <strong>CSV</strong> file. Every time a user enters information and generates an email, this function saves the region, division, date, time, and street in a file called <strong>policiamentos.csv</strong>. This data persistence allows for an organized record of all submitted requests without the need for a more complex database. Here is the implementation of this function:</p>
    <pre id="code_save_to_csv"><code><span class="orange_code">def</span> save_to_csv(region, division, date, time, street):
    file_name <span class="green_code">=</span> <span class="blue_code">"policiamentos.csv"</span>
    <span class="orange_code">with</span> open(file_name, mode=<span class="blue_code">'a'</span>, newline=<span class="blue_code">''</span>, encoding=<span class="blue_code">'utf-8'</span>) <span class="orange_code">as</span> file:
        writer <span class="green_code">=</span> csv.writer(file)
        writer.writerow([region, division, date.strftime(<span class="blue_code">'%d/%m/%Y'</span>), time, street])</code></pre>
    <p>An especially interesting part of this project was learning how to interact with Outlook Web to send pre-filled emails. The tool dynamically builds the email body using the data entered in the form and then automatically opens the default email client to send the request to the appropriate police division. This aspect was implemented using Python's <strong>webbrowser</strong> module, which helped me understand the flexibility of web-based email protocols to automate communication tasks. The <strong>send_email()</strong> function is responsible for this process. It retrieves the data from the form, constructs the subject and body of the email, and then automatically opens the mail client with the pre-filled request, allowing the user to simply click "send." Here's the function's code:</p>
    <pre id="code_send_email"><code><span class="orange_code">def</span> send_email():
    region <span class="green_code">=</span> region_var.get()
    date <span class="green_code">=</span> date_entry.get_date()
    street <span class="green_code">=</span> street_entry.get()
    division <span class="green_code">=</span> division_var.get()
    time <span class="green_code">=</span> time_var.get()

    subject <span class="green_code">=</span> f<span class="blue_code">"Pedido Serviço Remunerado - {street} - {division} - {date.strftime('%d/%m/%Y')}"</span>
    body <span class="green_code">=</span> f<span class="blue_code">"""..."""</span>

    recipient <span class="green_code">=</span> f<span class="blue_code">"{region.lower()}@{division[:3].lower()}fakeemail.com"</span>

    mailto_link <span class="green_code">=</span> f<span class="blue_code">"mailto:{recipient}?subject={urllib.parse.quote(subject)}"</span>
    webbrowser.open(mailto_link)

    save_to_csv(region, division, date, time, street)</code></pre>
    <p>Additionally, integrating a date picker using the <strong>tkcalendar</strong> module was a feature I found particularly useful. It allowed users to select the date intuitively, preventing errors in manually entering the date. The use of calendar widgets like this can significantly enhance the user experience in applications that require precise date selection. Features like these are crucial for applications of this type, as they minimize the possibility of human errors, which in turn reduces the time needed to fix those mistakes. Here's how the date picker is implemented:</p>
    <pre id="code_calendar"><code>date_entry <span class="green_code">=</span> DateEntry(frame, width<span class="green_code">=</span><span class="pink_code">30</span>, date_pattern<span class="green_code">=</span><span class="blue_code">"dd/mm/yyyy"</span>)
date_entry.grid(row<span class="green_code">=</span><span class="pink_code">1</span>, column<span class="green_code">=</span><span class="pink_code">1</span>, pady<span class="green_code">=</span><span class="pink_code">5</span>)</code></pre>
    <p>Regarding data persistence, the <strong>save_to_csv()</strong> function is highly useful for logging all the request details. Every time a user generates an email, the function saves the request in the <strong>CSV</strong> file, ensuring that all information is stored in an organized and accessible way. This not only improves internal organization but also makes it easier to access historical data for future analysis or reference.</p>
    <p>One of the greatest lessons from this project was the importance of automating repetitive tasks, such as email creation and data logging. Through this project, I learned how to interact with web services, such as email, directly from Python, streamlining internal processes. I also realized how to use a simple graphical interface to make applications more accessible to users. Another important takeaway was the use of Python to manage data persistence without relying on more complex databases. Using a <strong>CSV</strong> file to store records turned out to be an effective solution for a project like this, allowing for efficient data storage and easy access.</p>
    <p>Finally, integrating tools like <strong>tkcalendar</strong> for date selection and <strong>webbrowser</strong> for interacting with Outlook Web allowed me to enhance my skills in automating everyday processes in professional environments. This project not only reinforced my understanding of Python's capabilities for task automation, but also improved my ability to design practical solutions that facilitate management and communication within a company. The lessons learned here will be essential for future projects, both in task automation and in developing more complex applications.</p>
  `,

  "lavaresi-admin-panel": `
    <p>The <strong>Lavaresi Admin Panel</strong> is the internal management tool of a laundry-reservation platform for residential properties. It lets property managers register buildings, configure shared laundry equipment such as washing machines and dryers, manage residents and their apartments, and oversee the timeslots residents use to book them.</p>
    <p>The panel is built with <strong>Flutter Web</strong> as part of a <strong>Melos</strong> monorepo, sharing authentication, models, and services with the resident-facing app through a common <strong>shared_code</strong> package. This let me reuse core business logic across apps instead of duplicating it, while keeping the admin interface independent.</p>
    <h2>State management with GetX</h2>
    <p>I used <strong>GetX</strong> for state management, routing, and dependency injection. Controllers expose the data each screen needs and react to changes without extra boilerplate. Access to certain sections depends on the signed-in user's role, resolved through a shared <strong>AuthService</strong> injected via <strong>Get.find()</strong>:</p>
    <pre id="code_admin_controller"><code><span class="orange_code">class</span> <span class="blue_code">AdminController</span> <span class="orange_code">extends</span> GetxController {
  AuthService <span class="orange_code">get</span> _authService <span class="green_code">=></span> Get.find();

  <span class="orange_code">bool</span> <span class="orange_code">get</span> isSuperuser <span class="green_code">=></span> _authService.isSuperuser;
  <span class="orange_code">bool</span> <span class="orange_code">get</span> isPropertyManager <span class="green_code">=></span> _authService.isPropertyManager;
}</code></pre>
    <p>This pattern made it straightforward to show or hide parts of the panel, such as global configurations, depending on whether the signed-in user is a superuser or a property manager.</p>
    <h2>Managing properties, residents and reservations</h2>
    <p>Each property has its own set of tabs — Residents, Objects, Reservations, Info, Apartments, Availability, and Timeslots — so managers can search residents by name or apartment, register laundry objects, and control the availability windows residents can reserve. Data can be exported to <strong>CSV</strong> and <strong>Excel</strong> for reporting, using the <strong>csv</strong> and <strong>excel</strong> packages together with <strong>file_picker</strong> for uploads.</p>
    <p>Working on this project helped me get comfortable building multi-screen Flutter Web applications with role-based access, reusing code across a monorepo, and structuring a real admin dashboard that a non-technical team uses day to day.</p>
  `,
};
