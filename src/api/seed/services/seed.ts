import type { Core } from '@strapi/strapi';
import { seedData } from '../../../seed-data';

export default ({ strapi }: { strapi: Core.Strapi }) => ({
  async seed() {
    console.log('Attempting to seed data...');

    try {
      // Check if data already exists
      const count = await strapi.entityService.count('api::obituary.obituary');
      if (count > 0) {
        const message = 'Obituary data already exists. Skipping seed.';
        console.log(message);
        return { success: false, message };
      }

      console.log('No obituary data found. Starting to seed...');
      const createdEntries = [];

      for (const data of seedData) {
        try {
          const entry = await strapi.entityService.create('api::obituary.obituary', {
            data: {
              ...(data as any),
              publishedAt: new Date(),
            },
          });
          createdEntries.push({ id: entry.id, fullName: entry.fullName });
        } catch (error) {
          console.error(`Error creating entry for: ${data.fullName}`, error);
        }
      }

      const message = `Successfully seeded ${createdEntries.length} obituary entries.`;
      console.log(message);
      return { success: true, message, createdEntries };

    } catch (error) {
      console.error('Error during seeding:', error);
      return { success: false, message: 'An error occurred during seeding.' };
    }
  },
});
