using FullStackFunBetter.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore; // This is the key using statement for .Include()

namespace FullStackFunBetter.Controllers;

[ApiController]
[Route("[controller]")]
public class BowlingController : ControllerBase
{
    private BowlingLeagueContext _bowlingContext;
    
    public BowlingController(BowlingLeagueContext temp)
    {
        _bowlingContext = temp;
    }
    
    [HttpGet(Name = "GetBowlerInfo")]
    public IEnumerable<Bowler> Get()
    {
        // Adding .Include(x => x.Team) tells Entity Framework to perform a SQL JOIN
        // and populate the Team property on each Bowler object.
        var bowlerList = _bowlingContext.Bowlers
            .Include(x => x.Team)
            .Where(x => x.Team.TeamName == "Marlins" || x.Team.TeamName == "Sharks")
            .ToList();
            
        return bowlerList;
    }
}