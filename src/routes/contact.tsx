import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Phone, Mail, MapPin, Clock, MessageSquare, Calendar } from "lucide-react";
import heroCar from "@/assets/hero-car.jpg";
import { services } from "@/data/services";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Gloss Stone Auto Beauty" },
      { name: "description", content: "Get in touch with Gloss Stone Auto Beauty. Call or text (540) 305-0499 or email Andrew@GlossStoneAuto.com to book your mobile detail." },
      { property: "og:title", content: "Contact — Gloss Stone Auto Beauty" },
      { property: "og:description", content: "Call or text (540) 305-0499 to book your mobile detail." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    datetime: "",
    details: "",
  });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `New Booking Inquiry — ${form.name || "Website"}`;
    const body = [
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Email: ${form.email}`,
      `Service: ${form.service}`,
      `Preferred Date/Time: ${form.datetime}`,
      "",
      "Details:",
      form.details,
    ].join("\n");
    window.location.href = `mailto:Andrew@GlossStoneAuto.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const inputClass =
    "w-full rounded-md bg-card/60 border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors";

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroCar})` }}
          aria-hidden
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, oklch(0.10 0.005 0 / 0.95) 0%, oklch(0.10 0.005 0 / 0.7) 50%, oklch(0.10 0.005 0 / 0.2) 100%)",
          }}
          aria-hidden
        />
        <div className="relative mx-auto max-w-7xl px-4 md:px-6 py-20 md:py-32">
          <h1 className="font-display text-5xl md:text-7xl tracking-wide text-silver">
            CONTACT US
          </h1>
          <p className="mt-3 font-display text-xl md:text-2xl tracking-widest text-primary">
            WE'D LOVE TO HEAR FROM YOU
          </p>
          <p className="mt-6 max-w-md text-base md:text-lg text-muted-foreground">
            Have a question or ready to book?
            <br />
            Reach out today!
          </p>
        </div>
      </section>

      {/* Get In Touch + Form */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="rounded-xl border border-border bg-card/30 p-6 md:p-10">
            <div className="grid gap-10 md:grid-cols-2 md:gap-12">
              {/* Left: Get in touch */}
              <div>
                <h2 className="font-display text-3xl tracking-wider text-silver mb-8">
                  GET IN TOUCH
                </h2>

                <ul className="space-y-7">
                  <li className="flex items-start gap-4">
                    <div className="shrink-0 h-11 w-11 rounded-md flex items-center justify-center text-primary">
                      <Phone className="h-7 w-7" />
                    </div>
                    <div>
                      <a
                        href="tel:5403050499"
                        className="block font-display text-2xl tracking-wider text-foreground hover:text-primary transition-colors"
                      >
                        (540) 305-0499
                      </a>
                      <div className="mt-1 text-sm">
                        <a href="tel:5403050499" className="text-primary hover:underline">Call</a>
                        <span className="text-muted-foreground"> or </span>
                        <a href="sms:5403050499" className="text-primary hover:underline">Text</a>
                      </div>
                    </div>
                  </li>

                  <li className="flex items-start gap-4">
                    <div className="shrink-0 h-11 w-11 rounded-md flex items-center justify-center text-primary">
                      <Mail className="h-7 w-7" />
                    </div>
                    <div>
                      <a
                        href="mailto:Andrew@GlossStoneAuto.com"
                        className="block text-base md:text-lg text-foreground hover:text-primary transition-colors break-all"
                      >
                        Andrew@GlossStoneAuto.com
                      </a>
                      <a
                        href="mailto:Andrew@GlossStoneAuto.com"
                        className="mt-1 inline-block text-sm text-primary hover:underline"
                      >
                        Email Us
                      </a>
                    </div>
                  </li>

                  <li className="flex items-start gap-4">
                    <div className="shrink-0 h-11 w-11 rounded-md flex items-center justify-center text-primary">
                      <MapPin className="h-7 w-7" />
                    </div>
                    <div>
                      <p className="text-base md:text-lg text-foreground">
                        Serving the Surrounding Areas
                      </p>
                      <p className="mt-1 text-sm text-primary">
                        Mobile Detailing — We Come to You!
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-4">
                    <div className="shrink-0 h-11 w-11 rounded-md flex items-center justify-center text-primary">
                      <Clock className="h-7 w-7" />
                    </div>
                    <div>
                      <p className="text-base md:text-lg text-foreground">Monday – Sunday</p>
                      <p className="mt-1 text-sm text-primary">8:00AM – 6:00PM</p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Right: Form */}
              <div className="md:border-l md:border-border md:pl-12">
                <h2 className="font-display text-3xl tracking-wider text-silver mb-8">
                  SEND US A MESSAGE
                </h2>

                <form onSubmit={onSubmit} className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <input
                      type="text"
                      required
                      maxLength={100}
                      placeholder="Full Name"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className={inputClass}
                    />
                    <input
                      type="tel"
                      maxLength={20}
                      placeholder="Phone Number"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className={inputClass}
                    />
                  </div>

                  <input
                    type="email"
                    required
                    maxLength={255}
                    placeholder="Email Address"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className={inputClass}
                  />

                  <select
                    value={form.service}
                    onChange={(e) => setForm({ ...form, service: e.target.value })}
                    className={`${inputClass} appearance-none bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 20 20%22 fill=%22%23999%22><path d=%22M5.5 7.5l4.5 4.5 4.5-4.5z%22/></svg>')] bg-no-repeat bg-[right_1rem_center] pr-10`}
                  >
                    <option value="">Service Interested In</option>
                    {services.flatMap((cat) =>
                      cat.items.map((item) => (
                        <option key={`${cat.title}-${item.name}`} value={item.name}>
                          {item.name}
                        </option>
                      ))
                    )}
                    <option value="Other / Not Sure">Other / Not Sure</option>
                  </select>

                  <input
                    type="text"
                    maxLength={100}
                    placeholder="Preferred Date & Time"
                    value={form.datetime}
                    onChange={(e) => setForm({ ...form, datetime: e.target.value })}
                    className={inputClass}
                  />

                  <textarea
                    rows={4}
                    maxLength={1000}
                    placeholder="Additional Details"
                    value={form.details}
                    onChange={(e) => setForm({ ...form, details: e.target.value })}
                    className={`${inputClass} resize-y`}
                  />

                  <button
                    type="submit"
                    className="w-full rounded-md bg-gradient-red py-4 font-display text-lg tracking-[0.2em] text-primary-foreground shadow-red hover:shadow-glow transition-all"
                  >
                    SEND MESSAGE
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Book Your Appointment */}
      <section className="pb-20">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="text-center mb-10">
            <div className="flex items-center justify-center gap-4">
              <span className="h-px w-12 bg-border" />
              <h2 className="font-display text-3xl md:text-4xl tracking-wider text-silver">
                BOOK YOUR APPOINTMENT
              </h2>
              <span className="h-px w-12 bg-border" />
            </div>
            <p className="mt-3 text-muted-foreground">Choose your preferred method to book.</p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            <a
              href="tel:5403050499"
              className="group rounded-xl border border-border bg-card/40 p-8 text-center hover:border-primary hover:shadow-glow transition-all"
            >
              <Phone className="h-12 w-12 text-primary mx-auto mb-5 group-hover:scale-110 transition-transform" />
              <h3 className="font-display text-xl tracking-wider text-silver">CALL OR TEXT</h3>
              <p className="mt-2 font-display text-xl text-primary tracking-wider">(540) 305-0499</p>
              <p className="mt-2 text-sm text-muted-foreground">Fastest Response</p>
            </a>

            <div className="rounded-xl border border-border bg-card/40 p-8 text-center">
              <Calendar className="h-12 w-12 text-primary mx-auto mb-5" />
              <h3 className="font-display text-xl tracking-wider text-silver">BOOK ONLINE</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Schedule your detail online
              </p>
              <p className="mt-2 font-display text-sm tracking-widest text-primary">COMING SOON</p>
            </div>

            <a
              href="sms:5403050499"
              className="group rounded-xl border border-border bg-card/40 p-8 text-center hover:border-primary hover:shadow-glow transition-all"
            >
              <MessageSquare className="h-12 w-12 text-primary mx-auto mb-5 group-hover:scale-110 transition-transform" />
              <h3 className="font-display text-xl tracking-wider text-silver">MESSAGE US</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Send us a message and we'll reply ASAP
              </p>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
