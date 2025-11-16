

"use client";

import { ChangeEvent, FormEvent, useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ToastContainer, toast } from "react-toastify";
import Loader from "./Loader";


export default function ContactForm() {
  const formRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLInputElement>(null);
  const contentRef = useRef<HTMLTextAreaElement>(null);
  const tagsRef = useRef<HTMLInputElement>(null);
  const archivedRef = useRef<HTMLInputElement>(null);
  const pinnedRef = useRef<HTMLInputElement>(null);
  const submitRef = useRef<HTMLButtonElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [isReady, setIsReady] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const target = e.target as HTMLInputElement | HTMLTextAreaElement;
    const { name, value } = target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setLoading(true);
      if (formData.email === "" || formData.message === "") {
        return toast.error("Enail and content are required");
      }
      const response = await fetch("/api/post-contact", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
        }),
      });

      console.log(response)

      const data = await response.json();
      console.info("Contact submitted:", data);
      toast.success("Contact submitted successfully!!!");
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (err) {
      console.error(err);
      toast.error(`${err}: Please try again later`)
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => setIsReady(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isReady || !formRef.current) return;

    const tl = gsap.timeline();

    tl.from(formRef.current, {
      opacity: 0,
      y: 150,
      duration: 1.2,
      ease: "power3.out",
    }).from(
      [
        titleRef.current,
        contentRef.current,
        tagsRef.current,
        archivedRef.current?.parentElement,
        pinnedRef.current?.parentElement,
        submitRef.current,
      ].filter((el): el is HTMLElement => el !== null),
      {
        opacity: 0,
        x: -50,
        stagger: 0.25,
        duration: 0.8,
        ease: "back.out(1.7)",
      }
    );

    const fields = [
      titleRef.current,
      contentRef.current,
      tagsRef.current,
      archivedRef.current?.parentElement,
      pinnedRef.current?.parentElement,
      submitRef.current,
    ];
    fields.forEach((field) => {
      if (field) {
        field.addEventListener("mouseenter", () => {
          gsap.to(field, {
            scale: 1.02,
            duration: 0.4,
            ease: "power2.out",
          });
        });
        field.addEventListener("mouseleave", () => {
          gsap.to(field, {
            scale: 1,
            duration: 0.4,
            ease: "power2.out",
          });
        });

        // Focus: slight bounce
        if (
          field instanceof HTMLInputElement ||
          field instanceof HTMLTextAreaElement
        ) {
          field.addEventListener("focus", () => {
            gsap.to(field, {
              y: -5,
              duration: 0.3,
              yoyo: true,
              repeat: 1,
              ease: "bounce.out",
            });
          });
          field.addEventListener("blur", () => {
            gsap.to(field, {
              y: 0,
              duration: 0.3,
              ease: "power2.out",
            });
          });
        }
      }
    });

    // Special for content textarea: expand on focus
    if (contentRef.current) {
      contentRef.current.addEventListener("focus", () => {
        gsap.to(contentRef.current, {
          height: "300px",
          duration: 0.5,
          ease: "power3.inOut",
        });
      });
      contentRef.current.addEventListener("blur", () => {
        gsap.to(contentRef.current, {
          height: "150px",
          duration: 0.5,
          ease: "power3.inOut",
        });
      });
    }

    // Submit button pulse animation on hover
    if (submitRef.current) {
      submitRef.current.addEventListener("mouseenter", () => {
        gsap.to(submitRef.current, {
          scale: 1.05,
          duration: 0.3,
          ease: "power2.out",
        });
      });
      submitRef.current.addEventListener("mouseleave", () => {
        gsap.to(submitRef.current, {
          scale: 1,
          duration: 0.3,
          ease: "power2.out",
        });
      });
    }

    // Cleanup
    return () => {
      tl.kill();
      fields.forEach((field) => {
        if (field) {
          field.removeEventListener("mouseenter", () => {});
          field.removeEventListener("mouseleave", () => {});
          if (
            field instanceof HTMLInputElement ||
            field instanceof HTMLTextAreaElement
          ) {
            field.removeEventListener("focus", () => {});
            field.removeEventListener("blur", () => {});
          }
        }
      });
      if (contentRef.current) {
        contentRef.current.removeEventListener("focus", () => {});
        contentRef.current.removeEventListener("blur", () => {});
      }
      if (submitRef.current) {
        submitRef.current.removeEventListener("mouseenter", () => {});
        submitRef.current.removeEventListener("mouseleave", () => {});
      }
    };
  }, [isReady]);

  return (
    <div
      ref={formRef}
      className="p-8 max-w-2xl mx-auto rounded-lg shadow-2xl mb-[1rem] bg-white"
    >
      <ToastContainer autoClose={5000} />
      {loading ? (
        <Loader />
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name */}
          <div>
            <label htmlFor="title" className="block text-sm font-medium mb-2 text-black">
              Name
            </label>
            <input
              ref={titleRef}
              id="name"
              type="text"
              name="name"
              onChange={handleChange}
              value={formData.name}
              className="w-full p-3 border border-black rounded-md placeholder-gray-600"
              placeholder="Enter your name"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2 text-black">
              Email
            </label>
            <input
              ref={tagsRef}
              id="email"
              type="email"
              name="email"
              onChange={handleChange}
              value={formData.email}
              className="w-full p-3 border border-black rounded-md placeholder-gray-600"
              placeholder="e.g., example@gmail.com"
            />
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2 text-black">
              Message/Suggestions
            </label>
            <textarea
              ref={contentRef}
              name="message"
              onChange={handleChange}
              value={formData.message}
              id="message"
              className="w-full p-3 border border-black rounded-md placeholder-gray-600 h-36 resize-none"
              placeholder="Write your message/suggestions here..."
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className={`w-full p-3 rounded-md font-semibold transition-all ${
              loading
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-black text-white hover:bg-gray-800"
            }`}
          >
            <p>{loading ? "Sending..." : "Submit"}</p>
          </button>
        </form>
      )}
    </div>
  );
}