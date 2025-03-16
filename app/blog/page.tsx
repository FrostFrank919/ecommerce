"use client";

import { useState } from 'react';
import { NotebookPen, CalendarDays, User, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const truncateText = (text: string, maxLength: number) => {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength) + '...';
};

export default function Blog() {
  const [expandedPostId, setExpandedPostId] = useState<number | null>(null);
  
  const blogPosts = [
    {
      id: 1,
      title: 'The Spiritual Significance of Rudraksha',
      excerpt: `Rudraksha, the sacred seed of the Rudraksha tree, holds immense spiritual and mystical significance in Hinduism and Buddhism. It is believed to be the tears of Lord Shiva, symbolizing divine power, protection, and enlightenment. For centuries, sages, saints, and spiritual seekers have worn Rudraksha beads to deepen their meditation and enhance their spiritual growth.
              Divine Origin and Mythology According to ancient scriptures, Rudraksha originated from the tears of Lord Shiva. It is said that when Shiva opened his eyes after deep meditation, tears fell onto the earth, giving rise to the Rudraksha tree. This divine connection makes Rudraksha a powerful spiritual tool that carries the energy of Shiva himself. It is revered for its ability to ward off negativity and bring peace, prosperity, and protection. The Shiva Purana and Padma Purana describe Rudraksha as a sacred element that bestows moksha (liberation). It is believed that those who wear it with devotion are blessed with spiritual awakening and divine grace. Ancient texts also mention that Rudraksha is highly revered by gods, saints, and yogis who seek enlightenment.
              Symbol of Protection and Positive Energy Rudraksha beads are known for their strong protective energies. Many believe that wearing a Rudraksha mala shields one from negative influences, evil energies, and harmful planetary effects. The beads create a protective aura around the wearer, enhancing confidence and inner strength. It is also said to neutralize negative karma and cleanse past sins, allowing the wearer to progress spiritually without obstacles.
              Astrologically, Rudraksha is believed to have the power to balance planetary doshas (malefic planetary effects). People suffering from Saturn's influence (Shani Dosha) often wear Rudraksha to reduce hardships and bring stability in life.
              Spiritual and Meditative Benefits Rudraksha is widely used in meditation and spiritual practices. It is believed to stabilize the mind, improve concentration, and bring clarity. The vibrations of Rudraksha align with the body's energy, helping to balance emotions and reduce stress. Meditating with Rudraksha beads enhances focus and creates a deep connection with the divine. The rhythmic repetition of mantras with Rudraksha beads is said to amplify spiritual vibrations, making meditation more effective. Saints and yogis believe that wearing Rudraksha helps open the Ajna (third eye) chakra, which leads to heightened intuition and self-awareness.

Types of Rudraksha and Their Significance

Rudraksha beads come in different "mukhis" or faces, each having unique spiritual properties:

One Mukhi Rudraksha – Represents Shiva himself, brings ultimate spiritual awakening, and destroys attachment to material desires.

Three Mukhi Rudraksha – Symbolizes the three fires (Agni) and helps in overcoming past karmas.

Five Mukhi Rudraksha – Most common, represents Lord Shiva's five forms, enhances inner peace and spiritual growth.

Seven Mukhi Rudraksha – Associated with Goddess Lakshmi, brings wealth and prosperity.

Nine Mukhi Rudraksha – Represents Goddess Durga, grants strength and protection against adversities.

Eleven Mukhi Rudraksha – Represents Hanuman, enhances courage, wisdom, and self-discipline.

Fourteen Mukhi Rudraksha – Considered the third eye of Shiva, brings immense intuition and spiritual enlightenment.

Each bead type has its own vibration and purpose, making Rudraksha a powerful spiritual companion for seekers on different paths.

Healing Properties of Rudraksha

Apart from its spiritual significance, Rudraksha is believed to have healing properties. It is said to regulate blood pressure, calm the nervous system, and relieve stress. The beads are also used in Ayurveda for their therapeutic benefits, promoting overall well-being. Some traditional healers believe that Rudraksha beads help in controlling anxiety, depression, and insomnia. Scientific studies suggest that Rudraksha beads contain electromagnetic properties that positively influence the human body's energy field. When worn on the skin, they help maintain a balanced heart rate and enhance mental clarity.

How to Wear Rudraksha for Maximum Benefit

To experience the full benefits of Rudraksha, it should be worn with devotion and purity. It is advised to chant Shiva's name or a mantra while wearing it. The beads should be cleaned regularly and kept away from impure activities. By treating Rudraksha with respect, one can harness its divine energy for spiritual and personal growth.

Here are some guidelines for wearing Rudraksha:

Always wear Rudraksha after energizing it with mantras like "Om Namah Shivaya."

Avoid wearing Rudraksha while consuming alcohol, meat, or engaging in negative activities.

Store Rudraksha beads in a clean place when not wearing them.

Do not share your Rudraksha mala with others, as it absorbs personal energy.

Rudraksha and the Chakras

Rudraksha beads are closely linked to the seven chakras in the body. Different mukhis are known to activate and balance specific chakras, ensuring a free flow of divine energy (prana). For example:

One Mukhi Rudraksha activates the Crown Chakra, leading to spiritual enlightenment.

Five Mukhi Rudraksha balances the Throat Chakra, enhancing communication and truthfulness.

Nine Mukhi Rudraksha energizes the Solar Plexus Chakra, increasing self-confidence and power.

By wearing Rudraksha according to one's spiritual needs, one can balance the chakras and experience inner harmony.

Scientific Perspective on Rudraksha

Modern research has shown that Rudraksha beads have bio-electrical properties that positively affect the body. The unique surface of the beads generates subtle frequencies that harmonize brain waves, reducing stress and improving overall mental health. Scientists have also discovered that Rudraksha beads exhibit piezoelectric properties, meaning they generate electrical charges when subjected to pressure. This helps in stabilizing the body's electromagnetic field.

Conclusion

Rudraksha is more than just a sacred bead—it is a divine gift carrying the blessings of Lord Shiva. Whether worn for spiritual progress, protection, or healing, Rudraksha remains a timeless symbol of faith and enlightenment. Those who embrace it with devotion find themselves on a path of inner peace, wisdom, and divine connection.

With its immense spiritual, healing, and scientific benefits, Rudraksha continues to be an invaluable tool for those seeking a higher purpose in life. Its presence in meditation, worship, and healing practices makes it a sacred and powerful companion for anyone on a spiritual journey.`,
      date: 'March 15, 2024',
      author: 'Spiritual Guide',
      image: '/images/rudrakhsa.png'
    },
    {
      id: 2,
      title: 'Choosing the Right Rudraksha for You',
      excerpt: 'Learn how to select the perfect bead based on your spiritual needs and astrological alignment. Our comprehensive guide covers everything from mukhi counts to energy compatibility. Discover how different Rudraksha beads interact with chakras and planetary influences to enhance your spiritual journey.',
      date: 'March 12, 2024',
      author: 'Ayurvedic Expert',
      image: '/images/rudrakhsa.png'
    },
  ];

  return (
    <>
      <Header />
      <section className='flex flex-col'>
        {/* Hero Section */}
        <div className='relative h-[60vh] w-full overflow-hidden'>
          <div className="absolute inset-0">
            <Image
              src="/images/Bestback.png"
              alt="Blog"
              fill
              priority
              className="object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>
          <div className='container relative z-10 mx-auto flex h-full flex-col items-center justify-center px-4 text-center text-white'>
            <h1 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl">
              Spiritual Insights
            </h1>
            <p className="mb-8 max-w-2xl text-lg md:text-xl">
              Discover Ancient Wisdom and Modern Practices
            </p>
          </div>
        </div>

        {/* Blog Content */}
        <div className='bg-gray-50 py-16'>
          <div className='container mx-auto px-4'>
            <div className='grid lg:grid-cols-3 gap-8'>
              {/* Main Content */}
              <div className='lg:col-span-2 space-y-8'>
                {blogPosts.map((post) => {
                  const isExpanded = expandedPostId === post.id;
                  const displayText = isExpanded 
                    ? post.excerpt 
                    : truncateText(post.excerpt, 200);

                  return (
                    <article key={post.id} className='bg-white rounded-xl shadow-lg overflow-hidden'>
                      <div className='relative h-64'>
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          className='object-cover'
                        />
                      </div>
                      <div className='p-8'>
                        <div className='flex items-center gap-4 text-gray-500 mb-4'>
                          <div className='flex items-center gap-2'>
                            <CalendarDays className='h-5 w-5' />
                            <span>{post.date}</span>
                          </div>
                          <div className='flex items-center gap-2'>
                            <User className='h-5 w-5' />
                            <span>{post.author}</span>
                          </div>
                        </div>
                        <h2 className='text-2xl font-bold mb-4'>{post.title}</h2>
                        <p className='text-gray-600 mb-6'>{displayText}</p>
                        <Button 
                          className='bg-primary hover:bg-primary/90 transition-transform'
                          onClick={() => setExpandedPostId(isExpanded ? null : post.id)}
                        >
                          {isExpanded ? 'Read Less' : 'Read More'}
                          <ArrowRight 
                            className={`ml-2 h-4 w-4 transition-transform ${
                              isExpanded ? 'rotate-90' : ''
                            }`}
                          />
                        </Button>
                      </div>
                    </article>
                  );
                })}

                {/* Pagination */}
                <div className='flex justify-center gap-2'>
                  <Button variant="outline" className='rounded-full'>1</Button>
                  <Button variant="outline" className='rounded-full'>2</Button>
                  <Button variant="outline" className='rounded-full'>3</Button>
                </div>
              </div>

              {/* Sidebar */}
              <div className='space-y-8'>
                {/* Search */}
                <div className='bg-white p-6 rounded-xl shadow-lg'>
                  <h3 className='text-xl font-bold mb-4'>Search Articles</h3>
                  <div className='relative'>
                    <Input
                      type="search"
                      placeholder="Search posts..."
                      className='pl-10 h-12'
                    />
                    <NotebookPen className='absolute left-3 top-3 text-gray-400' />
                  </div>
                </div>

                {/* Categories */}
                <div className='bg-white p-6 rounded-xl shadow-lg'>
                  <h3 className='text-xl font-bold mb-4'>Categories</h3>
                  <ul className='space-y-2'>
                    {['Spiritual Growth', 'Meditation', 'Ayurveda', 'Ancient Wisdom'].map((category) => (
                      <li key={category} className='flex items-center gap-2 hover:text-primary'>
                        <ArrowRight className='h-4 w-4' />
                        <button className='text-left'>{category}</button>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Recent Posts */}
                <div className='bg-white p-6 rounded-xl shadow-lg'>
                  <h3 className='text-xl font-bold mb-4'>Recent Posts</h3>
                  <div className='space-y-4'>
                    {blogPosts.map((post) => (
                      <div key={post.id} className='flex items-center gap-4'>
                        <div className='relative h-16 w-16 flex-shrink-0'>
                          <Image
                            src={post.image}
                            alt={post.title}
                            fill
                            className='object-cover rounded-lg'
                          />
                        </div>
                        <div>
                          <h4 className='font-medium hover:text-primary'>{post.title}</h4>
                          <p className='text-sm text-gray-500'>{post.date}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}