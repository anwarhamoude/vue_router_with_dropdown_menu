var Welcome = Vue.component('welcome',{
    template: `<div class="main">
      <div class="flex">

        <div class="card">
          <!-- left -->
          <div class="card-left">
            <a href="#" class="card-skill">Developer</a>
            <img src="public/img/anwar.jpg">
            <span class="card-difficulty">Awesome</span>
          </div>

          <!-- right -->
          <div class="card-right">
            <div class="space-between">
            <h3 class="card-title"><a href="#">Anwar Hamoude<a/></h3>
            <h3 class="card-title"><a href="#">808-209-3251<a/></h3>
            </div>
            <div class="center-justify">
             <h4 class="card-title"><a href="#">SaaS Specialist<a/></h4>
            </div>
            <div>
            <p class="card-excerpt">
               Anwar Hamoude founded New Reliance Media LLC July 12, 2012 in Honolulu, Hawaii. Various types of technological solutions have been successfully implemented and continue to be developed. Specializing in Software as a Service (SaaS) built on Virtual Private Servers configured with Linux, Nginx, MySQL, PHP & Python. Artisan of technology demonstrating advanced skills beyond Software Architect, Linux System Administrator and MySQL Database Administrator. PHP/Laravel MVC Framework specialist that incorporates the functionality of JavaScript client-side scripting. JavaScript technologies including ECMAScript, Vue.js & React. Have a project in mind? Inquire today!
            </p>
            </div>

            <div class="card-meta">
              <div>
              <i class="fas fa-book"></i>
              8 Years Experience
              </div>
              <div>
              <i class="far fa-clock"></i>
              Anywhere in the world, any time of day,
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>`
})
