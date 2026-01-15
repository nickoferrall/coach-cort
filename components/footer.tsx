import { Instagram, Youtube, MapPin } from "lucide-react"
import Link from "next/link"

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
                href="https://www.instagram.com/cortfitnessetob"
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
            <h4 className="text-lg font-bold text-foreground mb-4 tracking-tight">PROGRAMS</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/programs/personal-training" className="text-muted-foreground hover:text-primary transition-colors">
                  Personal Training
                </Link>
              </li>
              <li>
                <Link href="/programs/group-classes" className="text-muted-foreground hover:text-primary transition-colors">
                  Group Classes
                </Link>
              </li>
              <li>
                <Link href="/programs/youth-training" className="text-muted-foreground hover:text-primary transition-colors">
                  Youth Training
                </Link>
              </li>
              <li>
                <Link href="/programs/hyrox-training" className="text-muted-foreground hover:text-primary transition-colors">
                  HYROX Training
                </Link>
              </li>
              <li>
                <Link href="/programs" className="text-muted-foreground hover:text-primary transition-colors">
                  All Programs
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold text-foreground mb-4 tracking-tight">LINKS</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/#schedule" className="text-muted-foreground hover:text-primary transition-colors">
                  Schedule
                </Link>
              </li>
              <li>
                <Link href="/reviews" className="text-muted-foreground hover:text-primary transition-colors">
                  Reviews
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-muted-foreground hover:text-primary transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold text-foreground mb-4 tracking-tight">CONTACT</h4>
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
