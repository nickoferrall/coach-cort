import { Instagram, Youtube, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-secondary/50 py-12 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-4 tracking-tight">Cort Fitness</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Etobicoke&apos;s premier personal training gym. Customized training specific to your goals.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/cortfitness/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://www.youtube.com/@AndrewCortFitness"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5" />
              </a>
              <a
                href="https://www.google.com/maps/place/Coach+Cort/@43.6130763,-79.5198574,15z/data=!4m5!3m4!1s0x0:0x9438c0a2e6c2a08!8m2!3d43.6130763!4d-79.5198574?shorturl=1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Google Maps"
              >
                <MapPin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold text-foreground mb-4 tracking-tight">QUICK LINKS</h4>
            <ul className="space-y-2">
              <li>
                <a href="/programs" className="text-muted-foreground hover:text-primary transition-colors">
                  Programs
                </a>
              </li>
              <li>
                <a href="/team" className="text-muted-foreground hover:text-primary transition-colors">
                  Team
                </a>
              </li>
              <li>
                <a href="/reviews" className="text-muted-foreground hover:text-primary transition-colors">
                  Reviews
                </a>
              </li>
              <li>
                <a href="/faq" className="text-muted-foreground hover:text-primary transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold text-foreground mb-4 tracking-tight">CONTACT INFO</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>313 Evans Avenue</li>
              <li>Etobicoke, Ontario M8Z 1K2</li>
              <li>
                <a href="tel:6479670336" className="hover:text-primary transition-colors">
                  647-967-0336
                </a>
              </li>
              <li>
                <a href="mailto:a.cortfitness@gmail.com" className="hover:text-primary transition-colors">
                  a.cortfitness@gmail.com
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold text-foreground mb-4 tracking-tight">HOURS</h4>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li className="flex justify-between">
                <span>Mon - Fri:</span>
                <span>6:00 AM - 9:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday:</span>
                <span>8:00 AM - 4:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday:</span>
                <span>9:00 AM - 2:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-muted-foreground/80">
          <p>&copy; {new Date().getFullYear()} Cort Fitness. All rights reserved.</p>
          <p className="mt-2">
            Powered by{" "}
            <a
              href="https://fitlo.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline transition-colors"
            >
              Fitlo
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
