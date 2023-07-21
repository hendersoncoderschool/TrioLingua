import './globals.css'

export default function page() {
  return (
    <main>
      <h1>TrioLingua</h1>
      <div id = "spacing"></div>
      <div class = "parent">
        <div class = "child">
      <img src = "bigger_dolphin.png"></img>
        </div>
      <div class = "child card">
        <h3>Welcome to TrioLingua, the perfect app to learn a language with a friend (or two)! Here at TrioLingua we believe that learning is best with a bit of fun, so we provide multiple competitive and cooperative games to play with your friends! And of course, we offer individual activities, best used to practice for some friendly competition.</h3>
      </div>
        </div>
      <nav>
        <a href = "#"><i class="fa fa-check-square"></i></a>
        <a href = "#"><i class='fas fa-bell'></i></a>
        <a href = "#"><i class='far fa-calendar-alt'></i></a>
        <a href = "#"><i class='fas fa-wifi'></i></a>
        <a href = "#"><i class='fas fa-star'></i></a>
        <a href = "/favorites"><i class='fas fa-heart'></i></a>
        <a href = "#"><i class='fa fa-shopping-cart'></i>
</a>
        
      </nav>
    </main>
  )
}
