using CRMTest2.Core.Interfaces;
using CRMTest2.Models.Enities;
using Microsoft.EntityFrameworkCore;

namespace CRMTest2.Core.Repositories
{
    public class ContactRepository : IContactRepository
    {
        private readonly CRMAppContext _context;

        public ContactRepository(CRMAppContext context)
        {
            _context = context;
        }

        public async Task<Contact> GetById(int id)
        {
            return await _context.Set<Contact>().FindAsync(id);
        }

        public async Task<List<Contact>> GetAll()
        {
            return await _context.Set<Contact>().ToListAsync();
        }

        public async Task Add(Contact contact)
        {
            await _context.Set<Contact>().AddAsync(contact);
            await _context.SaveChangesAsync();
        }

        public async Task Update(Contact contact)
        {
            _context.Set<Contact>().Update(contact);
            await _context.SaveChangesAsync();
        }

        public async Task Delete(Contact contact)
        {
            _context.Set<Contact>().Remove(contact);
            await _context.SaveChangesAsync();
        }
    }
}
