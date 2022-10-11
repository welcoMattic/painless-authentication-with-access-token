<?php

namespace App\Factory;

use App\Entity\SecretFormula;
use App\Repository\SecretFormulaRepository;
use Zenstruck\Foundry\RepositoryProxy;
use Zenstruck\Foundry\ModelFactory;
use Zenstruck\Foundry\Proxy;

/**
 * @extends ModelFactory<SecretFormula>
 *
 * @method static SecretFormula|Proxy createOne(array $attributes = [])
 * @method static SecretFormula[]|Proxy[] createMany(int $number, array|callable $attributes = [])
 * @method static SecretFormula[]|Proxy[] createSequence(array|callable $sequence)
 * @method static SecretFormula|Proxy find(object|array|mixed $criteria)
 * @method static SecretFormula|Proxy findOrCreate(array $attributes)
 * @method static SecretFormula|Proxy first(string $sortedField = 'id')
 * @method static SecretFormula|Proxy last(string $sortedField = 'id')
 * @method static SecretFormula|Proxy random(array $attributes = [])
 * @method static SecretFormula|Proxy randomOrCreate(array $attributes = [])
 * @method static SecretFormula[]|Proxy[] all()
 * @method static SecretFormula[]|Proxy[] findBy(array $attributes)
 * @method static SecretFormula[]|Proxy[] randomSet(int $number, array $attributes = [])
 * @method static SecretFormula[]|Proxy[] randomRange(int $min, int $max, array $attributes = [])
 * @method static SecretFormulaRepository|RepositoryProxy repository()
 * @method SecretFormula|Proxy create(array|callable $attributes = [])
 */
final class SecretFormulaFactory extends ModelFactory
{
    public function __construct()
    {
        parent::__construct();

        // TODO inject services if required (https://symfony.com/bundles/ZenstruckFoundryBundle/current/index.html#factories-as-services)
    }

    protected function getDefaults(): array
    {
        return [
            // TODO add your default values here (https://symfony.com/bundles/ZenstruckFoundryBundle/current/index.html#model-factories)
            'name' => self::faker()->text(),
        ];
    }

    protected function initialize(): self
    {
        // see https://symfony.com/bundles/ZenstruckFoundryBundle/current/index.html#initialization
        return $this
            // ->afterInstantiate(function(SecretFormula $secretFormula): void {})
        ;
    }

    protected static function getClass(): string
    {
        return SecretFormula::class;
    }
}
