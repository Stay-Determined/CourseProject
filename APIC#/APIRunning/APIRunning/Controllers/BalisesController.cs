using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using APIRunning.Data;
using APIRunning.Models;

namespace APIRunning.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BalisesController : ControllerBase
    {
        private readonly ArchiDB _context;

        public BalisesController(ArchiDB context)
        {
            _context = context;
        }

        // GET: api/Balises
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Balise>>> GetBalise()
        {
          if (_context.Balise == null)
          {
              return NotFound();
          }
            return await _context.Balise.ToListAsync();
        }

        // GET: api/Balises/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Balise>> GetBalise(int id)
        {
          if (_context.Balise == null)
          {
              return NotFound();
          }
            var balise = await _context.Balise.FindAsync(id);

            if (balise == null)
            {
                return NotFound();
            }

            return balise;
        }

        // PUT: api/Balises/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutBalise(int id, Balise balise)
        {
            if (id != balise.ID)
            {
                return BadRequest();
            }

            _context.Entry(balise).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!BaliseExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Balises
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Balise>> PostBalise(Balise balise)
        {
          if (_context.Balise == null)
          {
              return Problem("Entity set 'ArchiDB.Balise'  is null.");
          }
            _context.Balise.Add(balise);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetBalise", new { id = balise.ID }, balise);
        }

        // DELETE: api/Balises/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteBalise(int id)
        {
            if (_context.Balise == null)
            {
                return NotFound();
            }
            var balise = await _context.Balise.FindAsync(id);
            if (balise == null)
            {
                return NotFound();
            }

            _context.Balise.Remove(balise);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool BaliseExists(int id)
        {
            return (_context.Balise?.Any(e => e.ID == id)).GetValueOrDefault();
        }
    }
}
